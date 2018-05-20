var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function(){

    var app = express();

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    
    app.use(express.static('images-news'));
    
    var cors = require('cors')
    app.use(cors());
    
    consign().
    include('controllers').
    then('persistencia').
    into(app);

    return app;
};
