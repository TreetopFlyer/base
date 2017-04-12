require('dotenv').config();
var express = require('express');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

var server = express();
server.engine('handlebars', handlebars());
server.set('view engine', 'handlebars');
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cookieParser());
server.use("/static", express.static(__dirname+'/static'));
server.get("/", function(inReq, inRes)
{
    inRes.render("home", {title:"Home page", layout:"main"});
});
module.exports = server;