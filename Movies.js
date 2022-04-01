var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

mongoose.Promise = global.Promise;


try {
    mongoose.connect( process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
        console.log("connected"));
}catch (error) {
    console.log("could not connect");
}
//mongoose.set('useCreateIndex', true); //had to remove this

//movies Schema
var MoviesSchema = new Schema({
    title: { type: String, required: true, index: { unique: true }},
    releaseYear: { type: String, required: true},
    genre: { type: String, required: true},
    actors: [{actorName: String, characterName: string, required: true}]
});

/*
MoviesSchema.pre('save', function(next) {
    var movie = this;

    if (movie.actors.length < 3)
        return res.json({success: false, message: '3 actors.'}); //not sure what the issue is here

        next();

});
*/


module.exports = mongoose.model('Movies', MoviesSchema);
