var mysql  = require('mysql');

function createDBConnection(){
		//return mysql.createConnection({
		//	host: 'localhost',
		//	user: 'root',
		//	password: '',
		//	database: 'assof'
		//});
		return mysql.createConnection({
			host: 'mysql.assofce.kinghost.net',
			user: 'assofce',
			password: 'assofce00',
			database: 'assofce'
		});
}

module.exports = function() {
	return createDBConnection;
}
