var goodReadService = function(){

	var gerBookById = function(id, cb){
		cb(null, {
			description: "Our Description"
		});
	};

	return {

		getBookId: getBookId
	}
};

module.exports = goodReadService;