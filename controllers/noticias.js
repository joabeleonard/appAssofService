module.exports= function(app){
    app.get('/noticias', function(req, res){
        console.log('OK');
        res.send("hehe");
    });
}
