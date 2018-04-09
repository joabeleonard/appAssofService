function NoticiaDAO(connection){
    this._connection = connection;
}

NoticiaDAO.prototype.buscaPorCpf = function(callback){
    this._connection.query('select * from tb_noticia order by data',callback)
}

module.exports = function(){
    return NoticiaDAO;
};
