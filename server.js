var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/time', function(req,res){
  var date = new Date();
  res.json({currentTime: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()});
});

app.get('/hello/:name', function(req,res){
  res.json({msg: "Hello " + req.params.name});
});

var server = app.listen(port, function (req,res) {
  var listening = server.address().port;
  console.log("Now listening on port " + listening);
});
