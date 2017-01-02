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
		res.render('booksListView', {
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

bookRouter.route('/:id')
	.get(function(req, res){
		var id = 	req.params.id;
		res.render('bookView', {
			title: 'Books',
			nav: [{
					Link:'/Books', 
					Text: 'Books'
				}, {
					Link: '/Authors', 
					Text: 'Authors'
				}],
				books: books[id]
		});
});

module.exports = bookRouter;
