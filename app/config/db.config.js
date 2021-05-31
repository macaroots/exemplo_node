'use strict';
const FabricaMysql = require('../lib/FabricaMysql');

const options = {
  host     : process.env.MYSQL_HOST || 'localhost',
  user     : process.env.MYSQL_USER || 'teste',
  password : process.env.MYSQL_PASSWORD || '123',
  database : process.env.MYSQL_DATABASE || 'mapa'
};
let fabricaMysql = new FabricaMysql(options);
module.exports = fabricaMysql;
