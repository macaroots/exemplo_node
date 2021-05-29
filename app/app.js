
let options = {
    hostname: '0.0.0.0',
    port: 3000
};

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Setting up the public directory
app.use(express.static('public'))
  .set('views', 'views')
  .set('view engine', 'ejs');

// Setting up POST parser
app.use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.get('/oi', (req, res) => {
    res.render('index.ejs', {msg: 'oi ejs'});
});

const rotasIniciais = require('./rotas/iniciais.rotas.js');
const rotasPessoas = require('./rotas/pessoas.rotas.js');
// usando como middleware
app.use('/', rotasIniciais);
app.use('/api/v1/pessoas', rotasPessoas);

app.listen(options.port, options.hostname, () => {
    console.log(`Server running at http://${options.hostname}:${options.port}/`);
});
