'use strict';
const fabricaMysql = require('../config/db.config');
const DAOPessoas = require('../lib/DAOPessoas');
const dao = new DAOPessoas(fabricaMysql);
exports.index = function(req, res) {
    dao.list(function(err, pessoas) {
        if (err)
            res.send(err);
        res.render('index.ejs', {pessoas: pessoas});
    });
};
exports.adminPessoas = function(req, res) {
    res.render('admin/pessoas.ejs');
};
exports.mapa = function(req, res) {
    res.render('mapa.ejs');
};
exports.buscar = function(req, res) {
    const nome = req.body.nome;
    dao.findByName(pessoa, function(err, pessoas) {
        if (err)
            res.send(err);
        res.render('index.ejs', pessoas);
    });
};
