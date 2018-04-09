module.exports= function(app){
    app.get('/noticias', function(req, res){
       
        var usuario = req.body;

        var connection = app.persistencia.connectionFactory();
        var noticiaDAO = new app.persistencia.NoticiaDao(connection);
       
        console.log('OK');
        res.send("hehe");
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
