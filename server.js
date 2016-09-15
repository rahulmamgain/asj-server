'use-strict';

var app = require('express')();
var bodyParser = require('body-parser')

var pdfGenerationHandler = require('./handlers/pdf_generation_handler');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



/**
	API Definitions
**/
app.post('/api/getPDFURL', pdfGenerationHandler.getPDFURL);


/**
	Start App Server
**/
app.listen(3000, function(){
	console.log('Atleast the server is starting');
});