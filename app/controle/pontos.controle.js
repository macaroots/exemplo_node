'use strict';
const CrudController = require('./crud.controle.js');
const fabricaMysql = require('../config/db.config');
const DAOPontos = require('../lib/DAOPontos');
console.log(fabricaMysql);
const dao = new DAOPontos(fabricaMysql);
const crud = new CrudController(dao);

module.exports = crud;
