var express = require("express");

var app = express();

var port = 5000;
var bookRouter = express.Router();

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

var books = [
	
		{
			title: 'Operation Jedburgh',
			author: 'Colin Beavan'
		},
		{
			title: 'Lenin in Zurich',
			author: 'Alexander Solzhenitsyn'
		},
		{
			title: 'The Misfit Economy',
			author: 'Alexa Clay/Kyra Maya Phillips'
		}
	]

bookRouter.route('/')
	.get(function(req, res){
		res.render('books', {
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

bookRouter.route('/Single')
	.get(function(req, res){
		res.send('Hello Single Books');
	});


app.use('/Books', bookRouter)


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

