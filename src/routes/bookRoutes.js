var express = require('express');
var bookRouter = express.Router();
var sql = require('mssql');

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
	.get(function(req, res){
		var request = new sql.Request();

		request.query('select * from books',
					  function(err, recordset){
					  	res.render('bookListView', {
							title: 'Books',
							nav: nav,
							books: recordset
			 });		
		});
	});


	bookRouter.route('/:id')
	.get(function(req, res){
		var id = req.params.id;
		res.render('bookView', {
			title: 'Books',
			nav: nav,
				book: books[id]
		});});

	return bookRouter;
}
module.exports = router;
