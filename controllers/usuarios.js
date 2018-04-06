module.exports= function(app){

    app.get('/usuarios', function(req, res){
        console.log('OK');
        res.send("hehe");
    });


    app.post('/usuarios/logar', function(req, res){
        var usuario = reqs.body;

        var connection = app.persistencia.connectionFactory();
        var usuarioDAO = new app.persistencia.UsuarioDAO(connection);

        usuarioDAO.buscaPorUsuarioSenha(usuario, function(erro, resultado){

            req.assert("cpf", "CPF Obrigatório").notEmpty();
            req.assert("senha", "Senha Obrigatória").notEmpty();
            if(erro){
                console.log(erro);
                res.send(erro);
            }else{
                res.json(usuario);
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