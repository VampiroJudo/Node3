var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;


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
		}];

var router = function (nav) {

	adminRouter.route('/addBooks')
		.get(function(req,res) {
			var url = 
				'mongodb://localhost:27017/libraryApp';

			mongodb.connect(url, function (err, db) {
				var collection = db.collection('books');
				collection.insertMany(books, 
					function(err, results) {
						res.send(results);
						db.close();
					});
			});
			//res.send('inserting books');
		});


	return adminRouter;

};

module.exports = router;