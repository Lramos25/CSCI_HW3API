"# CSC_3619HW3 Login API #" 

https://csc-hw-3.herokuapp.com/#/

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/19231130-c4c790c7-32e1-4dc5-8516-cf3e88dbb193?action=collection%2Ffork&collection-url=entityId%3D19231130-c4c790c7-32e1-4dc5-8516-cf3e88dbb193%26entityType%3Dcollection%26workspaceId%3D059b02d9-6ab5-4182-b56c-f56e5f01f6f4)

# Note: #

Following along with the methods from the class videos I am able to get the users working fine but not movies. When i build my own API with a different method, I can get the movies to work, register and log in but I ran into issues with the token and verification of passwords - would log the user in even with incorrect password.
What I did for the final submission is built two different Heroku connections and just used what worked from both. The work from the class videos links to csc-hw3-api
and the new work for the movies management is linked to csc-hw3-api-movie in Heroku. 

This repository is for class video work (user function) the other repository is *HW3_API_Test

I have included screen shots of what works and doesnt work. 


# GET starting movie list - before any CRUD operations #

![Get All Movies before adding_ two movies total](https://user-images.githubusercontent.com/10605443/161398715-4ca369ac-c3b4-4d78-93e8-6db6143a28b8.png)

# Create new movie #
![Create movie](https://user-images.githubusercontent.com/10605443/161398716-77466fd7-7958-47ed-be2c-82e9bb74b52a.png)

# Showing new movie is added after the create #
![New movie is in list after new GET](https://user-images.githubusercontent.com/10605443/161398720-15d26847-1b4f-4195-a7eb-76a517e884ea.png)

# Update is not working - I could not get this going #
![Did not updtae year](https://user-images.githubusercontent.com/10605443/161398721-544927a8-40f9-4945-99a2-f5f74a159b62.png)

# Delete movie #
![Delete movie](https://user-images.githubusercontent.com/10605443/161398722-60c74106-e49a-413f-a812-0712657f1dd3.png)

# Showing movie is removed after the delete #
![Movie deleted verified when get all movies again](https://user-images.githubusercontent.com/10605443/161398723-ede5079b-9ee2-4512-9053-bf834d875704.png)

# SignUp works correctly when user already exists (from original we did with class video) #
![Signup _ user already exists](https://user-images.githubusercontent.com/10605443/161398727-84c3294e-56dc-43e0-8954-a0fc02b29e94.png)

# SignUp works (from original we did with class video) #
![Signin good from original HW3](https://user-images.githubusercontent.com/10605443/161398725-4f7ef83a-96ba-4205-bb68-54e968c524c2.png)

# SignIn works (from original we did with class video) #
![Login is good from original](https://user-images.githubusercontent.com/10605443/161398729-057374da-d432-4839-98b6-4235432a9cf0.png)

# SignIn works correctly when wrong password (from original we did with class video) #
![Login wrong Password from original](https://user-images.githubusercontent.com/10605443/161398730-372c4703-39e8-4861-b3dd-b9f2708a6dc0.png)

# SignUp works correctly when user already exists (from new I did) #
![signin from new attampt user already ](https://user-images.githubusercontent.com/10605443/161398731-1c5fa3ed-960d-4124-b7f5-f4981a535898.png)

# SignIn works (from new I did) #
![signin good from newer attempt](https://user-images.githubusercontent.com/10605443/161398732-98d34d5c-eec8-4a0f-be7e-2049ba55aa82.png)

# SignIn works (from new I did) #
![Login good in new attempt](https://user-images.githubusercontent.com/10605443/161398733-e22b1d9d-4c6a-4ade-bb1c-d9f5b8ef2b70.png)

# SignIn works but should not with bad password!! (from new I did) #
![Login should not be good  but it is in new attempt](https://user-images.githubusercontent.com/10605443/161398734-ead67a11-ba9e-4f3f-843f-db4900c5b88f.png)

# Showing 11 users are stored in MongoDb #
![total of 11 users as of now in mongoDB](https://user-images.githubusercontent.com/10605443/161398735-817d98c1-f13f-4602-880e-8b1e29e2ab9f.png)

# Showing a total of 5 movies are stored in MongoDb #
![total of 5 movies added to mongoDB](https://user-images.githubusercontent.com/10605443/161398737-16181451-07f1-4322-8a94-660e9ac8bc44.png)

# Showing users are stored in MongoDb after creating #
![mongoDB users from testing created](https://user-images.githubusercontent.com/10605443/161398738-a0f779f9-4e0a-4e8c-b02d-b0923d3a577d.png)

# Showing Terminator2 is removed from MongoDb #
![MogoDB T2 is deleted](https://user-images.githubusercontent.com/10605443/161398739-73c08e3a-d611-4b3c-842a-996e430961f3.png)

# Showing React pages - the "logged in as is highlighted because the CSS has it as the same color as the div background #
![react homepage](https://user-images.githubusercontent.com/10605443/161398741-318f76b9-d9f5-4493-8757-9196a13aaff8.png)


![react login screen](https://user-images.githubusercontent.com/10605443/161398742-adbab15e-78f9-4417-a5be-38bed0e4f368.png)


![react signup user](https://user-images.githubusercontent.com/10605443/161398743-042ad714-198b-4dc2-a2f8-2fc7536d6b29.png)


![logout user](https://user-images.githubusercontent.com/10605443/161398744-1a474253-bce5-4360-80be-265df31ec109.png)


![react login from register page](https://user-images.githubusercontent.com/10605443/161398745-35e26a04-3c73-42d8-b92c-41f0fb1ee73e.png)
