/*
CSC3916 HW2 server.js
Desc: Web API scaffolding for movie API
*/
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var authController = require('./auth');
var authJwtController = require('./auth_jwt');
var jwt = require('jsonwebtoken');
var cors = require('cors');
var User = require('./Users');
var Movies = require('./Movies');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(passport.initialize());

var router = express.Router();

function getJSONObjectForMovieRequirement(req) {
    var json = {
        headers: "No Headers",
        key: process.env.UNIQUE_KEY,
        body: "No Body",
    };

    if (req.body != null) {
        json.body = req.body;
    }

    if (req.headers != null) {
        json.headers = req.headers;
    }

    return json;
}


router.post('/signup', function (req, res) {
    if (!req.body.username || !req.body.password) {
        res.json({success: false, msg: 'Please include username and password.'})
    } else {
        var user = new User();
        user.name = req.body.name;
        user.username = req.body.username;
        user.password = req.body.password;

        user.save(function(err){
            if (err) {
                if (err.code == 11000)
                    return res.json({success: false, message: 'user already exists.'});
                else
                    return res.json(err);
            }

            res.json({success: true, msg: 'Successfull.'})
        });
    }
});

router.post('/signin', function (req, res) {
    var userNew = new User();
    userNew.username = req.body.username;
    userNew.password = req.body.password;

    User.findOne({ username: userNew.username }).select('name username password').exec(function(err, user) {
        if (err) {
            res.send(err);
        }

        user.comparePassword(userNew.password, function(isMatch) {
            if (isMatch) {
                var userToken = { id: user.id, username: user.username };
                var token = jwt.sign(userToken, process.env.SECRET_KEY);
                res.json ({success: true, token: 'JWT ' + token});
            }
            else {
                res.status(401).send({success: false, msg: 'Authentication failed.'});
            }
        })
    })
});


router.route('/movies') //I think this might be where my issue is. Maybe I need each of these to be seperate
    .get(authJwtController.isAuthenticated, function(req, res){

        //get movie
        Movies.findOne( {title: req.body.message}).select('title releaseYear genre actors').exec(function (err, movie) {
            if (err) {
                res.send(err)
            }
            let resMovie = {
                title: movie.title,
                releaseYear: movie.releaseYear,
                genre: movie.genre,
                actors: movie.actors
            }
            res.json(resMovie);
        })
    })

    //save new movie
    .post(authJwtController.isAuthenticated, function (req,res){
        switch (req) {
            case !req.body.title:
                return res.json({success: false, message: 'title of the movie'});
            case !req.body.releaseYear:
                return res.json({success: false, message: 'release year'});
            case !req.body.genre:
                return res.json({success: false, message: 'genre.'});
            case req.body.actors.length < 3:
                return res.json({success: false, message: '3 actors.'});
            default:
                var movieNew = new Movies();
                movieNew.title = req.body.title;
                movieNew.releaseYear = req.body.releaseYear;
                movieNew.genre = req.body.genre;
                movieNew.actors = req.body.actors;
                movieNew.save(function (err){
                    if (err) {
                        if (err.code == 11000)
                            return res.json({success: false, message: 'Movie already exists.'});
                        else
                            return res.json(err);
                    }
                    res.send({status: 200, message: "movie saved", headers: req.headers, query: req.query, env: process.env.UNIQUE_KEY});
                });
        }

    })

    //update movie yyyy
    .put(authJwtController.isAuthenticated, function (req,res){

        Movies.findOneAndUpdate({title: req.body.title}, {releaseYear: req.body.releaseYear}).exec(function (err, movie) {
            if (err)
                res.send(err)
            else
                res.json( {status: 200, message: "updated year", new_releaseYear: req.body.releaseYear})
        });
    })

    // delete movie
    .delete(authJwtController.isAuthenticated, function(req, res) {

        Movies.findOneAndDelete( {title: req.body.title}).exec(function (err, movie) {
            if (err)
                res.send(err)
            else
                res.json( {status: 200, message: "deleted", deleted_movie: req.body.title})
        });
    });



app.use('/', router);

app.listen(process.env.PORT || 8008);

module.exports = app; // for testing only

