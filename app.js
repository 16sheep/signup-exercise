//Load in node modules
var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

//Create database connection string
var db = 'mongodb://localhost:27017/users';

//Create express app
var app = express();

mongoose.connect(db, (err) => {
     if(err){
         console.log(err)
     }
 });

//Configure express middleware
app.use(bodyparser.json);
app.use(express.static(__dirname + '/public'))
app.get("*", (request, response) => {
    response.sendFile(__dirname + '/public.index.html')
})
//Create server
app.listen(process.env.PORT || 3000, () => {
    console.log("App is Working")
});