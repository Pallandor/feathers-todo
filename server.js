var express = require('express');
var ReactEngine = require('react-engine');

var app = express();
var engine = ReactEngine.server.create();

// Set template engine
app.engine('.jsx', engine); 
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx'); 

// babel require hook
require('babel-register')({
	// BUGFIX: Add presets
	presets: ['react', 'es2015']
	// BUGFIX: Remove option ignore: false. Investigate. 
}); 

app.get('/', function(req,res){
	res.render('index'); 
});

//
app.listen(3000, function(){
	console.log('server now listening...'); 
}); 