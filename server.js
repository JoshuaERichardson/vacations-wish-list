// Required Middleware
const express = require('express');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const dotenv = require('dotenv')
const http = require('http')
const { auth } = require('express-openid-connect')
dotenv.config()

app.use(logger('dev'))




// Use pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const config = {
  authRequired: false,
  auth0Logout: true
}

const port = process.env.PORT || 3000;
if(!config.baseURL && !process.env.BASE_URL && process.env.PORT && process.env.NODE_ENV !== 'production') {
    config.baseURL = `http://localhost:${port}`;
}
else if (process.env.BASE_URL && process.env.NODE_ENV == 'production') {
    config.baseURL = process.env.BASE_URL;
}


app.use(auth(config))

app.use((req, res, next) => {
  res.locals.user = req.oidc.user;
  next();
})



// app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('./models'));




// Mongo:
const db = require('./models/mongoose');
const VacationCRUD = require('./models/vacationcrud')
const VacationModel = require('./models/vacationmodel')
// Routing:
const indexRouter = require('./routes/index.js')




app.use('/', indexRouter);
// const vacationDB = require('./routes/vacationDB.js')
// app.post('/vacationDB', (request, response) => {
//   request.body;
//   response.send(request.body);
// });

// To grab the data from the form
const bodyParser = require('body-parser');
const router = express.Router();
// const jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.post('/vacationDB', async function (req, res) {
  await VacationCRUD.saveVacation(req.body)
  res.redirect('/')
  return;
});
app.get('/loggedIn', async (req, res) => {
  await UserCRUD.saveUser()
})

// Delete:
app.get('/vacationDB/delete/:cardID', async (req, res) => {
  let url = req.url.slice(19)
  await VacationModel.findByIdAndDelete(url)
})
const { deleteCard } = require('./public/javascripts/buttons')
app.delete('/vacationDB', async (req, res) => {
    console.log('hopefully: ',req.body)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
