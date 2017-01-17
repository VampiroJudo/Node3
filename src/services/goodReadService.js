var goodReadService = function () {

	var gerBookById = function(id, cb){
		cb(null, {
			description: "Our Description"
		});
	};

	return {

		getBookById: getBookById
	}
};

module.exports = goodReadService;