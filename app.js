//Load in node modules
var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

//Create database connection string
var db = 'mongodb://localhost:27017/users';
var port = 8080
//Create express app
var app = express();

mongoose.connect(db, (err) => {
     if(err){
         console.log(err)
     }
 });

 mongoose.connection.on('error',() => {
    console.log("error")
 });

//Configure express middleware
app.use(bodyparser.json);
app.use(bodyparser.urlencoded({
  extended: true
}))
app.use(express.static(__dirname + '/public'));
app.get("*",(req,res)=>{
  console.log(req)
  res.sendFile(__dirname + "/public/index.html");
});
app.use(logErrors)

function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}

//Create server
app.listen(port);
console.log("listening at port " + port)