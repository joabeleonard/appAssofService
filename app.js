const express = require('express')
	, app = express()
	, multer = require('multer');

var bodyParser = require('body-parser');


// cria uma instância do middleware configurada
// destination: lida com o destino
// filenane: permite definir o nome do arquivo gravado
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images-news/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

// utiliza a storage para configurar a instância do multer
const upload = multer({ storage,limits: {fileSize: 100000000, files:1} });


app.use(express.static('public'));

// continua do mesma forma 
app.post('/file/upload', upload.single('file'), 
    (req, res) => res.send('<h2>Upload realizado com sucesso</h2>'));  

app.listen(21319, () => console.log('App na porta 3000'));	