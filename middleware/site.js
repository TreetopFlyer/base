var router = require('express').Router();

router.use('/home', function(inReq, inRes){
    console.log(inReq.session.passport);
    inRes.render('home', inReq.session.passport);
});

module.exports = router;