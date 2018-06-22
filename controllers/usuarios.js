var fs = require('fs');
var multer  = require('multer');


module.exports= function(app){

    app.get('/usuarios', function(req, res){
        var connection = app.persistencia.connectionFactory();
        var usuarioDAO = new app.persistencia.UsuarioDao(connection);
       
        usuarioDAO.buscarTodas(function(erro, resultado){

           if(erro || resultado.length ===0){
                console.log(erro);
                res.status(500).send(erro);
                return;
            }else{
                res.json(resultado);
                return;
            }
            
        });

    });


    app.post('/usuarios/logar', function(req, res){
        
        var usuario = req.body;
        var connection = app.persistencia.connectionFactory();
        var usuarioDAO = new app.persistencia.UsuarioDao(connection);
        
        console.log(usuario);
        usuarioDAO.buscaPorCpfSenha(usuario, function(erro, resultado){

        
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

        usuarioDAO.buscaPorCpf()

        usuarioDAO.buscaPorCpf(usuario.cpf, function(erro, resultado){

        
            if(erro){
                console.log(erro);
                res.status(500).send(erro);
                return;
            }
            if(resultado.length ===0){
                usuarioDAO.criar(usuario, function(erro, resultado){
                         console.log('usuario criado: ' + JSON.stringify(resultado));
         
                         res.status(201).json(resultado);
                         return;
                 });
             }else{
                usuario.id_usuario= resultado[0].id_usuario; 
                usuarioDAO.editar(usuario, function(erro, resultado){
                    console.log('usuario editado: ' + JSON.stringify(resultado));
    
                    res.status(201).json(resultado);
                    return;
            });
             }
             
         });       
    });

    app.post('/usuarios/uploadImagee/', function(req, res){

        console.log('recebendo imagem');

         var filename = req.header.filename;
    
         req.pipe(fs.createWriteStream('images-news/' + filename+'.jpg'))
        .on('finish', function(){
          console.log('arquivo escrito');
          res.status(201).send('ok');
        });
        
    });

    app.route('/usuarios/uploadImage')
        .post(function (req, res, next) {
 
        var fstream;
        req.pipe(req.busboy);
        req.busboy.on('file', function (fieldname, file, filename) {
            console.log("Uploading: " + filename);
 
            //Path where image will be uploaded
            fstream = fs.createWriteStream( 'images-news/' + filename);
            file.pipe(fstream);
            fstream.on('close', function () {    
                res.status(201).send('ok');          //where to go next
            });
        });
    });

  
   
    
}