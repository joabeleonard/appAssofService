var app = require('./config/custom-express')();

app.listen(1234, function(){
    console.log('OK');
});

