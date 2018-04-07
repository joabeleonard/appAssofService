function NoticiaDAO(connection){
    this._connection = connection;
}

NoticiaDAO.prototype.buscaPorCpf = function(callback){
    this._connection.query('',callback)
}

module.exports = function(){
    return NoticiaDAO;
};
