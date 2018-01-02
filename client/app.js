const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use(session({
  secret: 'makers institute ea ea',
  resave: true,
  saveUninitialized: false,
}));

//cek session untuk kondisi 
app.use(function (req, res, next) {
  res.locals.currentUser = req.session.user;
  next();
});


app.use('/', routes);


app.use(function(req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
    title: "Error",
    status: err.status
  	});
  console.log(res.statusCode);
});


const port = process.env.port || 3001;
app.listen(port, () => {
	console.log("CLIENT, di http://127.0.0.1:" + port);
});