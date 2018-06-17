var fs = require("fs");

module.exports= function(app){
    app.get('/arquivos', function(req, res){
        res.send(fs.readdirSync('./images-news'));
    });

   
}