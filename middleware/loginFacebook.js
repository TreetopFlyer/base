var express = require('express');
var router = express.Router();

var passport = require('passport');
var passportFacebook = require('passport-facebook');

passport.use(new passportFacebook.Strategy({
        clientID: "1628003107468799",
        clientSecret: "2db01a126ae61f9b885262470c2abc88",
        callbackURL: "http://127.0.0.1/auth/facebook/redirect"
    },
    function(accessToken, refreshToken, profile, done) {
        console.log(profile);
        done(null, profile);
    }
));
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

router.use(passport.initialize());
router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/redirect', passport.authenticate('facebook'), function(inReq, inRes){
    inRes.send("ok");
});

module.exports = router;