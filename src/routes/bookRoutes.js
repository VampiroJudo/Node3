var express = require('express');

var bookRouter = express.Router();



var router = function(nav){
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
		}]
	bookRouter.route('/')
		.get(function (res, req) {
			res.render('bookListView', {
				title: 'Books',
				nav: nav,
				books: books
			});
		});


	bookRouter.route('/:id')
		.get(function (req, res) {
			var id = req.params.id;
			
		})

	
	return bookRouter;
}
module.exports = router;
