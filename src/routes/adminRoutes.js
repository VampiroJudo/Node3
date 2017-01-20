var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;


var books = [
	
		{
			title: 'Operation Jedburgh',
			author: 'Colin Beavan',
			bookId: 1290081,
			read: false
		},
		{
			title: 'Lenin in Zurich',
			author: 'Alexander Solzhenitsyn',
			bookId: 295017,
			read: false
		},
		{
			title: 'The Misfit Economy',
			author: 'Alexa Clay/Kyra Maya Phillips',
			bookId: 23522336,
			read: false
		},

		{
			title: 'Hadrian and the Triumph of Rome',
			author: 'Anthony Everitt',
			bookId: 6060179,
			read: false
		},

		{
			title: 'Andres Segovia As I knew Him',
			author: 'John W. Duarte',
			bookId: 3748054,
			read: false
		},

		{
			title: 'Kodokan Judo: The Essential Guide to Judo ',
			author: 'Jigoro Kano',
			bookId: 1207038,
			read: false
		}
	];


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
			
		});


	return adminRouter;

};

module.exports = router;