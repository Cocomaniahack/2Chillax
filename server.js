var express = require('express');
var app = express(); // here I use the express() method, instead of the createServer()

//app.get('/', function(req, res){
  //res.send('Hello World');
//});

app.set('view engine', 'html');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('view/index.html' , { root : __dirname});
})

app.get('/partners', function (req, res) {
  res.sendFile('src/partners/index.html' , { root : __dirname});
})

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});