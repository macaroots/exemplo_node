'use strict';
const CrudController = require('./crud.controle.js');
const fabricaMysql = require('../config/db.config');
const DAO = require('../lib/DAO');
console.log(fabricaMysql);
const dao = new DAO(fabricaMysql, 'pontos');
const crud = new CrudController(dao);

module.exports = crud;
