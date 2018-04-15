module.exports= function(app){
    app.get('/noticias', function(req, res){
       
        var usuario = req.body;

        var connection = app.persistencia.connectionFactory();
        var noticiaDAO = new app.persistencia.NoticiaDao(connection);
       
        noticiaDAO.buscarTodas(function(erro, resultado){

        
            console.log("resultado.length >0"+resultado.length);
           if(erro || resultado.length ===0){
                console.log(erro);
                res.status(500).send(erro);
                return;
            }else{
                console.log('Noticias encontradas: ' +  JSON.stringify(resultado));

                res.json(resultado);
                return;
            }
            
        });

    });

    app.post('/noticias/cadastar', function(req, res){

        var noticia = req.body;

        var connection = app.persistencia.connectionFactory();
        var noticiaDAO = new app.persistencia.NoticiaDao(connection);

        console.log('OK');
        res.send("hehe");
    });

    app.post('/noticias/editar', function(req, res){

        var noticia = req.body;

        var connection = app.persistencia.connectionFactory();
        var noticiaDAO = new app.persistencia.NoticiaDao(connection);

        console.log('OK');
        res.send("hehe");
    });

    app.delete('/noticias/:id', function(req, res){

        var id = req.params.id;

        var connection = app.persistencia.connectionFactory();
        var noticiaDAO = new app.persistencia.NoticiaDao(connection);
        console.log('OK');
        res.send("hehe");
    });
}
