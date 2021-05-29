'use strict';
const CrudController = require('./crud.controle.js');
const fabricaMysql = require('../config/db.config');
const DAOPessoas = require('../lib/DAOPessoas');
const dao = new DAOPessoas(fabricaMysql);
const crud = new CrudController(dao);

module.exports = crud;
