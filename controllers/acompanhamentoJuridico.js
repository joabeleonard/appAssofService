module.exports= function(app){
    app.get('/acompanhamentoJuridico', function(req, res){
        console.log('OK');
        res.send("hehe");
    });

    app.post('/acompanhamentoJuridico/cadastrar', function(req, res){

        var acompanhamentoJuridico = req.body;

        var connection = app.persistencia.connectionFactory();
        var acompanhamentoJuridico = new app.persistencia.AcompanhamentoJuridico(connection);
        console.log('OK');
        res.send("hehe");
    });

    app.post('/acompanhamentoJuridico/editar', function(req, res){
        var acompanhamentoJuridico = req.body;

        var connection = app.persistencia.connectionFactory();
        var acompanhamentoJuridico = new app.persistencia.AcompanhamentoJuridico(connection);
        console.log('OK');
        res.send("hehe");
    });

    app.delete('/acompanhamentoJuridico/:id', function(req, res){

        var id = req.params.id;

        var connection = app.persistencia.connectionFactory();
        var acompanhamentoJuridico = new app.persistencia.AcompanhamentoJuridico(connection);
        console.log('OK');
        res.send("hehe");
    });
}