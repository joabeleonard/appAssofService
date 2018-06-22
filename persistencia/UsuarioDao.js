function UsuarioDao(connection) {
    this._connection = connection;
}
UsuarioDao.prototype.buscaPorCpfSenha = function(usuario, callback){
    this._connection.query('select * from tb_usuario where cpf=? and senha=?',[usuario.cpf, usuario.senha],callback)
}

UsuarioDao.prototype.buscaPorCpf = function(cpf, callback){
    this._connection.query('select * from tb_usuario where cpf= ? ',[cpf],callback)
}

UsuarioDao.prototype.editar = function(usuario, callback){
    this._connection.query('update tb_usuario set  ? where id_usuario =?', [usuario, usuario.id_usuario],callback)
}

UsuarioDao.prototype.buscarTodas = function(callback){
    this._connection.query('select id_usuario,nome, cpf, email from tb_usuario ',callback)
}

UsuarioDao.prototype.criar = function(usuario, callback){
    this._connection.query('insert into tb_usuario set ?', usuario,callback)
}

module.exports = function(){
    return UsuarioDao;
};
