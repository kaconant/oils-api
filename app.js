const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//const dotenv = require('dotenv');
// dotenv.load();
require('dotenv').config()

const apiRouter = require('./routes/api');
const apiMailRouter = require('./routes/api/mail');
const apiOilRouter = require('./routes/api/oils');
const apiBlendRouter = require('./routes/api/blend');
const apiUserRouter = require('./routes/api/users');
const setupAuth = require('./auth');

const app = express();
const cors = require('cors');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));


app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Credentials", true);
  next();
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

setupAuth(app);

app.use('/api', apiRouter);
app.use('/api/mail', apiMailRouter);
app.use('/api/oils', apiOilRouter);
app.use('/api/blend', apiBlendRouter);
app.use('/api/user', apiUserRouter)

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err.message)
  // res.render('error');
});

module.exports = app;