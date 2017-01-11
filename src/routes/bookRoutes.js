var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongod').ObjectID;

var router = function(nav){
	
	bookRouter.route('/')
		.get(function (res, req) {
			var  id = ObjectID(req.params.id);
			var url = 
				'mongodb://localhost:27017/libraryApp';

			mongodb.connect(url, function (err, db) {
			var collection = db.collection('books');
			
			collection.findOne({_id: id},
				function(err, results) {
					res.render('bookView', {
						title: 'Books',
						nav: nav,
						books: results
					});
				});
			});
		});


	bookRouter.route('/:id')
		.get(function (req, res) {
			

	
	return bookRouter;
};

module.exports = router;
