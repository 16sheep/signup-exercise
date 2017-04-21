//Load in node modules
var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

//Create database connection string
var db = 'mongodb://localhost:27017/users';
//Create port
var port = process.env.PORT || 8080;
//Create express app
var app = express();

mongoose.connect(db, (err) => {
     if(err){
         console.log(err)
     }
 });


//Configure express middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(express.static('public'));
app.get("*",(req,res)=>{
  res.sendFile(__dirname + "/public.index.html");
});


//Create server
app.listen(port);
console.log("listening at port " + port)
