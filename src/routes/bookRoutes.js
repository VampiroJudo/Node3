var express = require('express');

var bookRouter = express.Router();

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
				}],
				books: books
		});
});

bookRouter.route('/Single')
	.get(function(req, res){
		res.send('Hello Single Books');
});

modeules.exports = bookRouter;
