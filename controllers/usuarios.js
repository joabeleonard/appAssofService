var fs = require('fs');

module.exports= function(app){

    app.get('/usuarios', function(req, res){
        console.log('OK');
        res.send("hehehe");
    });


    app.post('/usuarios/logar', function(req, res){
        
        var usuario = req.body;
        var connection = app.persistencia.connectionFactory();
        var usuarioDAO = new app.persistencia.UsuarioDao(connection);
        
        usuarioDAO.buscaPorCpfSenha(usuario, function(erro, resultado){

        
            console.log("resultado.length >0"+resultado.length);
           if(erro || resultado.length ===0){
                console.log(erro);
                res.status(500).send(erro);
                return;
            }else{
                console.log('usuario encontrado: ' +  JSON.stringify(resultado));

                res.json(resultado[0]);
                return;
            }
            
        });

    });

    app.post('/usuarios/update', function(req, res){

        var usuario = req.body;

        var connection = app.persistencia.connectionFactory();
        var usuarioDAO = new app.persistencia.UsuarioDao(connection);

        usuarioDAO.editar(usuario, function(erro){

            if(erro){
                 console.log(erro);
                 res.status(500).send(erro);
                 return;
             }else{
                 console.log('usuario atualizado: ' + JSON.stringify(usuario));
 
                 res.send(usuario);
                 return;
             }
             
         });

        console.log('OK');
        res.status(400).send("hehe");
    });

    app.post('/usuarios/cadastrar', function(req, res){

        var usuario = req.body;
        console.log(usuario);
        var connection = app.persistencia.connectionFactory();
        var usuarioDAO = new app.persistencia.UsuarioDao(connection);

        usuarioDAO.criar(usuario, function(erro, resultado){

            if(erro){
                 console.log(erro);
                 res.status(500).send(erro);
                 return;
             }else{
                 console.log('usuario criado: ' + JSON.stringify(resultado));
 
                 res.status(201).json(resultado);
                 return;
             }
             
         });
        console.log('OK');
    });

    app.post('/usuarios/uploadImage', function(req, res){

        console.log('recebendo imagem');

        var filename = req.headers.filename;
    
        req.pipe(fs.createWriteStream('images-news/' + filename))
        .on('finish', function(){
          console.log('arquivo escrito');
          res.status(201).send('ok');
        });
        
    });


    
}