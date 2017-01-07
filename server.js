require('dotenv').config();
var express = require('express');
var handlebars = require('express-handlebars');

var server = express();
server.use("/static", express.static(__dirname+'/static'));
server.engine('handlebars', handlebars());
server.set('view engine', 'handlebars');

server.use(require('./middleware/auth'));

module.exports = server;