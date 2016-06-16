var express = require('express');
var router = express.Router();

router.get('/:userID', function(inRequest, inResponse){
    inResponse.setHeader('Content-Type', 'application/json');
    inResponse.status(200).json({'projects':[]});
});
router.get('/:userID/:projectID', function(inRequest, inResponse){
    inResponse.setHeader('Content-Type', 'application/json');
    inResponse.status(200).json({'project':{}});
});

module.exports = router;