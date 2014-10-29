var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);

describe('Simple JSON API', function() {
  it('should send the local time', function(){
    chai.request('http://localhost:3000')
  .get('/')
  .end(function (err, res) {
     expect(res).to.have.status(200);
     expect(res).to.be.json();
   });
  });

  it('should greet someone', function(){
    chai.request('http://localhost:3000')
    .get('/hello/mark')
    .end(function (err, res) {
    expect(res).to.have.status(200);
    expect(res).to.be.json();
    });
  });
});
