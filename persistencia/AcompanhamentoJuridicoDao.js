function AcompanhamentoJuridicoDAO(connection){
    this._connection = connection;
}

AcompanhamentoJuridicoDAO.prototype.buscaPorCpf = function(cpf,callback){
    this._connection.query('select * from tb_acompanhamento_juridico as aj '+
    'join tb_usuario as u on u.id_usuario = aj.id_usuario where u.cpf = ? order by data desc', cpf,callback)
}

AcompanhamentoJuridicoDAO.prototype.criar = function(acompanhamento, callback){
    this._connection.query('insert into tb_acompanhamento_juridico set ?', acompanhamento,callback)
}

AcompanhamentoJuridicoDAO.prototype.buscarTodas = function(callback){
    this._connection.query('select * from tb_acompanhamento_juridico ',callback)
}

module.exports = function(){
    return AcompanhamentoJuridicoDAO;
};
