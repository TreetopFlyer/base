var express = require('express');
var passport = require('passport');
var passportFacebook = require('passport-facebook');
var passportGoogle = require('passport-google-oauth');
var passportGitHub = require('passport-github2');

passport.use(new passportFacebook.Strategy({
        clientID: process.env.oauth_facebook_id,
        clientSecret: process.env.oauth_facebook_secret,
        callbackURL: process.env.oauth_facebook_url
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));
passport.use(new passportGoogle.OAuth2Strategy({
        clientID: process.env.oauth_google_id,
        clientSecret: process.env.oauth_google_secret,
        callbackURL: process.env.oauth_google_url
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));
passport.use(new passportGitHub.Strategy({
        clientID: process.env.oauth_github_id,
        clientSecret: process.env.oauth_github_secret,
        callbackURL: process.env.oauth_github_url
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    done(null, {data:id});
});

var router = express.Router();
router.use(passport.initialize());
router.use(passport.session());
router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/redirect', passport.authenticate('facebook', {successRedirect:'/success', failureRedirect:'/failure'}));
router.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
router.get('/auth/google/redirect', passport.authenticate('google', {successRedirect:'/success', failureRedirect:'/failure'}));
router.get('/auth/github', passport.authenticate('github'));
router.get('/auth/github/redirect', passport.authenticate('github', {successRedirect:'/success', failureRedirect:'/failure'}));
router.get('/auth/logout', function(inReq, inRes){
    inReq.session.destroy();
    inRes.redirect('/');
});

module.exports = router;