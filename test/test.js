let chai = require('chai');
let should = require("chai").should();
let server = require("../app.js");
let assert = require("chai").assert;
let request = require('supertest');

let chaiHttp = require('chai-http');
chai.use(chaiHttp);

// post names

describe('post /names/save',()=>{
  it('should save the names',(done)=>{
    let name = {id:'10', Firstname:'surya', Lastname:'veera'}
    chai.request(server)
    .post('/names/save')
    .send(name)
    .end((err,res)=>{
      should.not.exist(err);
      res.status.should.equal(200);
      res.body.should.be.a('object');
      done();
    });
  });
});

// get names

describe('get /names/view',()=>{
  it('should get all the names',(done)=>{
    chai.request(server)
    .get('/names/view/')
    .end((err,res)=>{
      should.not.exist(err);
      res.body.should.be.a('Array');
      res.status.should.equal(200);
      console.log(res.body);
      done();
    });
  });
});
