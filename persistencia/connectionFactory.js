var mysql  = require('mysql');

function createDBConnection(){
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'assof'
		});
}

module.exports = function() {
	return createDBConnection;
}
