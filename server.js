var express        = require('express');
var handlebars     = require('express-handlebars');
var session        = require('express-session');
var bodyParser     = require('body-parser');
var cookieParser   = require('cookie-parser');

var server = express();
server.use("/static", express.static(__dirname+'/static'));
server.engine('handlebars', handlebars());
server.set('view engine', 'handlebars');

server.use('/', cookieParser());
server.use('/', bodyParser.json());
server.use('/', session({secret:process.env.session_hash}));
server.use('/', require('./middleware/auth.js'));
server.use('/', require('./middleware/site.js'));

module.exports = server;