module.exports= function(app){

    app.get('/usuarios', function(req, res){
        console.log('OK');
        res.send("hehe");
    });


    app.post('/usuarios/logar', function(req, res){
        var usuario = req.body;

        var connection = app.persistencia.connectionFactory();
        var usuarioDAO = new app.persistencia.UsuarioDao(connection);
        
        usuarioDAO.buscaPorCpfSenha(usuario, function(erro, resultado){

           if(erro){
                console.log(erro);
                res.status(500).send(erro);
                return;
            }else{
                console.log('usuario encontrado: ' + JSON.stringify(resultado));

                res.json(resultado);
                return;
            }
            
        });

    });

    app.post('/usuarios/update', function(req, res){
        console.log('OK');
        res.status(400).send("hehe");
    });

    app.post('/usuarios/cadastrar', function(req, res){
        console.log('OK');
        res.send("hehe");
    });


    
}