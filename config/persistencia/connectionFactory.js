var mysql = require('mysql');

function createDBConnection(){

    return mysql.createConnection(
        {
            host:'localhodt',
            user:'root',
            password:'',
            database:'assof'
        }
    );

    module.exports = function(){
        return createDBConnection;
    }
};