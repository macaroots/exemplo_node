
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
    res.render('index.ejs', {msg: 'oi ejs', pessoas: []});
});
const rotasIniciais = require('./rotas/iniciais.rotas.js');
const rotasPessoas = require('./controle/pessoas.controle.js').getRouter();
const rotasPontos = require('./controle/pontos.controle.js').getRouter();
const AuthController = require('./controle/auth.js');
const auth = new AuthController();
const rotasAuth = auth.getRouter();
// adicionando rotas como middleware
app.use('/', rotasIniciais);
app.use('/auth', rotasAuth);
app.use('/api/v1/pessoas', auth.getHandler(), rotasPessoas);
app.use('/api/v1/pontos', auth.getHandler(), rotasPontos);

app.listen(options.port, options.hostname, () => {
    console.log(`Server running at http://${options.hostname}:${options.port}/`);
});
