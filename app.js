var express = require('express');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var routes = require("routes")
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var react = require('react');

mongoose.connect('mongodb://localhost/users');
var database = mongoose.connection;

var app = express();



app.listen(process.env.PORT || 3000, () => {
    console.log("App is Working")
});