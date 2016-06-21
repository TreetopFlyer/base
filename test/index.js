var chai = require('chai');
var chaiHTTP = require('chai-http');
var server = require('../server');

var should = chai.should();
chai.use(chaiHTTP);

function checkStatus(inResponse){
    should.exist(inResponse);
    inResponse.should.have.status(200);
    inResponse.should.be.json;
}



describe('Project files REST', function(){

    it("should return a list of projects for a user on GET", function(){
        chai
        .request(server)
        .get('/api/user/123')
        .set('Authentication', '')
        .send()
        .then(function(inAccept){
            checkStatus(inAccept);
            inAccept.body.should.have.property('projects');
            inAccept.body.projects.should.be.an('array');
        }, function(inReject){
            throw inReject;
        });
    });

    it("should create a user on POST", function(){

    });

});