function UsuarioDAO(connection){
    this._connection = connection;
}

UsuarioDAO.prototype.buscaPorUsuarioSenha = function(usuario, callback){
    this._connection.query('select * from usuario where cpf='+usuario.cpf+' and senha'
    +usuario.senha,callback)
}

UsuarioDAO.prototype.editar = function(usuario, callback){
    this._connection.query('update tb_usuario set ?', usuario,callback)
}


UsuarioDAO.prototype.criar = function(usuario, callback){
    this._connection.query('insert into tb_usuario set ?', usuario,callback)
}