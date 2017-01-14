var express = require("express");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');



var app = express();

var port = 5000;

var nav = [{
	Link: '/Books',
	Text: 'Book'
			}, {
	Link: '/Authors',
	Text: 'Author'
	
}];

var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set('views', './src/views');

app.set('view engine', 'ejs');



app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);
app.use(cookie-parser());
app.use(session({secret: 'library'}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function(req, res) {
	res.render('index', {
			title: 'Books',
			nav: [{
					Link:'/Books', 
					Text: 'Books'
				}, {
					Link: '/Authors', 
					Text: 'Authors'
				}]
		});
});

app.get('/books', function(req, res){
	res.send('Hello Books');
});

app.listen(port, function(err) {
	console.log('running server on port ' + port);
});

