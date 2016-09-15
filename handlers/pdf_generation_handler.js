'use-strict';

var wkhtmltopdf = require('wkhtmltopdf');
var S = require('string');
var config = {};


/**
  Get PDF From A URL
**/
module.exports.getPDFURL = function(req, res) {
  if(!req.body) {
    res.status(400).send({'error' : "please send a valid url {url : <>}"});
    return;
  }
  if(S(req.body.url).isEmpty()){
    res.status(400).send({'error' : "please send a valid url {url : <>}"});
    return;
  }
  res.setHeader('Content-Type', 'text/pdf');
  try{
    wkhtmltopdf(req.body.url, config.pdfGeneration.options, function(code, signal) {
      console.log(code);
    }).pipe(res);  
  } catch(e) {
    res.status(500).send({'error' : "An unexpected error has occured please try again" + e});
  }
};
config.pdfGeneration = {};
config.pdfGeneration.options = {
  'javascript-delay' : 2000
};