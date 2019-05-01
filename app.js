var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

// ROUTERS
var indexRouter = require('./routes/index');
var employeesRouter = require('./routes/employees');
var productsRouter = require('./routes/products');
var storesRouter = require('./routes/stores');
var deliveryNotesRouter = require('./routes/deliveryNotes');

// CONTROLLERS
app.use('/', indexRouter);
app.use('/employees', employeesRouter);
app.use('/products', productsRouter);
app.use('/stores', storesRouter);
app.use('/deliveryNotes', deliveryNotesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only proempplsg error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
