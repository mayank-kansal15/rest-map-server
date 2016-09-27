#!/usr/bin/env node

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var routeHelper = require("./util/routeHelper");
var proxySettingHelper = require("./util/proxySettingHelper");
var arguments = require("./util/argsParser")();
var mockedRouteHandler = require("./routes/mockedUrlRouter");
var proxyUrlRouter = require("./routes/proxyUrlRouter");

var proxySettings = proxySettingHelper.loadIntitialSettings();
var routesData = routeHelper.loadIntitialRoutes();
var lastRouteID = routeHelper.getMaxIDValue(routesData);
var routRouter = require("./routes/setupRouter")(routesData, lastRouteID);
var proxySettingRouter = require("./routes/proxySettingRouter")(proxySettings);

var app = express();

// TODO: Need to check in which scenarios uncaughtException exception can occour
process.on('uncaughtException', function(err) {
  console.log(err);
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use("/setup-routes",express.static(path.join(__dirname, 'public')));
app.use(express.static(arguments.dirPath));
app.use(mockedRouteHandler(routesData));
app.use(proxyUrlRouter(proxySettings));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/routes", routRouter);
app.use("/proxy-setting", proxySettingRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(arguments.portNumber);
