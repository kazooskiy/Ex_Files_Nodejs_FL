var connect = require('connect');

var app = connect()
	.use(function (req, res) {
		res.statusCode = 403; //or 500
		res.end("Forbidden");
	})
	.listen(3000);