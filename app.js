const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

/* mongoose  Connect*/

const mongoose = require('mongoose');
mongoose
.connect('mongodb+srv://admin:adminadmin@cluster0.on9knl8.mongodb.net/mongodbponedelijedna?retryWrites=true&w=majority')
.then(() =>{
  console.log("Database connected")
})
.catch((err)=>{
  console.log(err)
})

/* mongoose  */


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const phonesRouter = require('./routes/phones');
const carsRouter = require('./routes/cars');
const animalRouter = require('./routes/animal');

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use("/phones", phonesRouter)
app.use("/cars", carsRouter)
app.use("/animals", animalRouter)


app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
