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
							books: books
			 });		
		});
	});


	bookRouter.route('/:id')
		.all(function (req, res, next) {
			var id = req.params.id;
			var ps = new sql.PreparedStatement();
			ps.input('id', sql.Int)
			ps.prepare('select * from books where id = @id',
				function (err) {
					ps.execute({
							id: req.params.id

						},
						function (err, recordset) {
							if (recordset.length === 0) {
							res.status(404).send('Not Found');
					
							} else {
								req.book = recordset[0];
								next();
							}
						});
					});
			})
			
			.get(function (req, res){
				res.render('bookView', {
					title: 'Books',
					nav: nav,
					book: req.book		
				});
		
			});
	

	
	return bookRouter;
}
module.exports = router;
