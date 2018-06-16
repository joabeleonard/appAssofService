var fs = require("fs");

module.exports= function(app){
    app.get('/arquivos', function(req, res){
        console.log('OK');
        res.send(fs.readdirSync('./images-news'));
    });

   
}