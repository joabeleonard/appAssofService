function AcompanhamentoJuridicoDAO(connection){
    this._connection = connection;
}

AcompanhamentoJuridicoDAO.prototype.buscaPorCpf = function(callback){
    this._connection.query('',callback)
}

module.exports = function(){
    return AcompanhamentoJuridicoDAO;
};
