let chai = require('chai');
let should = require("chai").should();
let server = require("../app.js");
let assert = require("chai").assert;
let request = require('supertest');

let chaiHttp = require('chai-http');
chai.use(chaiHttp);

// post with an id, Firstname and Lastname

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
      console.log(res.body);
      done();
    });
  });
});

// get all the names in the collection

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

// update the names that are saved in the collection using jobid

describe('patch /names/update',()=>{
  it('should update the given name',(done)=>{
    chai.request(server)
    .patch('/names/update')
    .send({id:'10',Firstname:'surya',Lastname:'teja'})
    .end((err,res)=>{
      res.should.have.status(200);
      res.body.should.be.a('object');
    done();
    });
  });
});