const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./cors');
const CommentsSQLite = require('../db-connection/sqliteDb')
const commentRouter = express.Router();
commentRouter.use(bodyParser.json());

/* 
  Get Comments sub router to get all the comments from database
  Allowed operations: OPTION, GET
  OPTION: requred for cors redirect and error resolving
  GET: Get all the comments from Comments table
*/
commentRouter.route('/getComments')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,(req,res,next) => {
  CommentsSQLite
    .select('*')
    .from('comments')
    .then(userData => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(userData)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving comments: ${err}` })
    })
});

/* 
  Create Comment sub router to create new comment and add to database
  Allowed operations: OPTION, POST
  OPTION: requred for cors redirect and error resolving
  POST: Create new entry in Comments table
*/
commentRouter.route('/createComment')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.post(cors.corsWithOptions,(req,res,next) => {
  CommentsSQLite('comments')
    .insert({
      'name': req.body.name,
      'message': req.body.message,
      'date': req.body.date
    })
    .then(() => {
      res.json({ message: `Comment created.` })
    })
    .catch(err => {
      res.json({ message: `There was an error creating comment: ${err}` })
    })
})

/* 
  Delete Comment sub router to delete all the comments from database
  Allowed operations: OPTION, DELETE
  OPTION: requred for cors redirect and error resolving
  DELETE: remove all entries from Comments table
*/
commentRouter.route('/deleteComments')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.delete(cors.corsWithOptions,(req, res, next) => {
  CommentsSQLite('comments')
    .del()
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})

commentRouter.route('/getComment/:commentId')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors,(req,res,next) => {
  CommentsSQLite
    .select('*')
    .from('comments')
    .where({id: req.params.commentId})
    .then(userData => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(userData)
    })
    .catch(err => {
      res.json({ message: `There was an error retrieving a comment: ${err}` })
    })
});

module.exports = commentRouter;
