module.exports= function(app){
    app.get('/acompanhamentoJuridico', function(req, res){
        console.log('OK');
        res.send("hehe");
    });
}