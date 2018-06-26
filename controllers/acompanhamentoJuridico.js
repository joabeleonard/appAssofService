module.exports= function(app){
    app.get('/acompanhamentoJuridico', function(req, res){

        var connection = app.persistencia.connectionFactory();
        var acompanhamentoJuridicoDao = new app.persistencia.AcompanhamentoJuridicoDao(connection);
       
        acompanhamentoJuridicoDao.buscarTodas(function(erro, resultado){
        
           if(erro || resultado.length ===0){
                console.log(erro);
                res.status(500).send(erro);
                return;
            }else{
                console.log('Acompanehamentos encontradas: ' +  JSON.stringify(resultado));

                res.json(resultado);
                return;
            }
            
        });

    });

    app.post('/acompanhamentoJuridico/cadastrar', function(req, res){

        var acompanhamentoJuridico = req.body;

        
        var connection = app.persistencia.connectionFactory();
        var acompanhamentoJuridicoDao = new app.persistencia.AcompanhamentoJuridicoDao(connection);
       
        acompanhamentoJuridicoDao.criar(acompanhamentoJuridico, function(erro, resultado){

            if(erro){
                 console.log(erro);
                 res.status(500).send(erro);
                 return;
             }else{
                 console.log('acompanhamentoJuridico criado: ' + JSON.stringify(resultado));
 
                 res.status(201).json(resultado);
                 return;
             }
             
         });
        console.log('OK');
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

    app.get('/acompanhamentoJuridico/:cpf', function(req, res){

        var cpf = req.params.cpf;

        var connection = app.persistencia.connectionFactory();
        
        var acompanhamentoJuridicoDAO = new app.persistencia.AcompanhamentoJuridicoDao(connection);
        acompanhamentoJuridicoDAO.buscaPorCpf(cpf, function(erro, resultado){
         
           if(erro  || resultado.length ===0){
                console.log(erro);
                res.status(500).send(erro);
                return;
            }else{
                console.log('processo encontrado: ' +  JSON.stringify(resultado));

                res.json(resultado);
                return;
            }
            
        });

    });
}