const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const commentsRouter = require('./routes/comments');

/*
	Server constants
*/
const hostname = 'localhost';
const port = 5000;


const app = express();

/* Middleware library for concise output for development use*/
app.use(morgan('dev'));

/*
	Comments operation sub-router
*/
app.use(bodyParser.json());
app.use('/', commentsRouter);
app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Back-End Server</h1></body></html>');
});

/*
	Server listener
*/
const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
