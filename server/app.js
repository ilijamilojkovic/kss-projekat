var createError = require('http-errors');
const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const app = express();
app.listen(8000, () => {
  console.log('Server started on port 8000');
});

var indexRouter = require('./routes/index');
let igracRouter = require('./routes/igracRoutes');
let timRouter = require('./routes/timRoutes');
consol.log(tim)
let konferencijaRouter = require('./routes/konferencijaRoutes');
let ligaRouter = require('./routes/ligaRoutes');

app.use('/igrac', igracRouter);
app.use('/tim', timRouter);
app.use('/konferencija', konferencijaRouter);
app.use('/liga', ligaRouter);
//63f133a85f640b7510c459e7
// Konekcija sa bazom
const mongoose = require('mongoose');
const url = "mongodb+srv://ilija1234:ilija1234@ilijacluster.e6dlcs1.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((err) => {
    console.error('Connection error:', err);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const cors = require('cors');
app.use(cors({
  origin: "*"
}));
app.use('/', indexRouter);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});*/

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
