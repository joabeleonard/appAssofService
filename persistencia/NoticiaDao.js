function NoticiaDAO(connection){
    this._connection = connection;
}

NoticiaDAO.prototype.buscarTodas = function(callback){
    this._connection.query('select * from tb_noticia order by id_noticia desc',callback)
}

module.exports = function(){
    return NoticiaDAO;
};
