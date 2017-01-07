var router = require('express').Router();
var passport = require('passport');
var passportFacebook = require('passport-facebook');

passport.use(new passportFacebook.Strategy({
    clientID:'1628003107468799',
    clientSecret:'2db01a126ae61f9b885262470c2abc88',
    callbackURL:'http://127.0.0.1/auth/facebook/redirect'
}, function(inTokenAccess, inTokenRefresh, inProfile, inDone){
    inDone(null, {fake:true});
}));

router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/redirect', passport.authenticate('facebook', {session:false}), function(inReq, inRes){
    inRes.send(inReq.user);
});


module.exports = router;

