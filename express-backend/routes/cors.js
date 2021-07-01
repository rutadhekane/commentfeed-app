const express = require('express');
const cors = require('cors');
const app = express();

/*
	Whitelisted origins
*/

const whitelist = ['http://localhost:3000'];

/* 
  corsOptionsDelegate is a function to delegate the CORS
  Parameters:
  	req:       Input request
  	callback:  Callback function to route

  Return:
	callback function
*/
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    console.log(req.header('Origin'));
    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    }
    else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);
