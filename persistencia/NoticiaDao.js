function NoticiaDAO(connection){
    this._connection = connection;
}

NoticiaDAO.prototype.buscarTodas = function(callback){
    this._connection.query('select * from tb_noticia order by id_noticia desc',callback)
}

NoticiaDAO.prototype.criar = function(noticia, callback){
    this._connection.query('insert into tb_noticia set ?', noticia,callback)
}
module.exports = function(){
    return NoticiaDAO;
};
