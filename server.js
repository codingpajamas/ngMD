var express = require('express');
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('layout.jade');
});

var port = process.env.PORT || 5001;
app.listen(port, function(){
	console.log('Listening to port ' + port);
})