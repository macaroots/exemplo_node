
let options = {
    hostname: '127.0.0.1',
    port: 3000,
    dir: 'public'
};

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Setting up the public directory
app.use(express.static(options.dir));

// Setting up POST parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.get('/', (req, res) => {
    res.send('Oi do node');
});

const pessoasRotas = require ('./rotas/pessoas.rotas.js')
// usando como middleware
app.use ('/api/v1/pessoas', pessoasRotas)

app.listen(options.port, options.hostname, () => {
    console.log(`Server running at http://${options.hostname}:${options.port}/`);
});
