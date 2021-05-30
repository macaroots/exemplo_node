const DAO = require('./DAO.js');

class DAOPontos extends DAO {
    constructor(connection, tableName='pontos') {
        super(connection, tableName);
    }
    valida(bean) {
        if (bean.lat == '') {
            throw new Error('Latitude não pode ser em branco!');
        }
        if (bean.lng == '') {
            throw new Error('Longitude não pode ser em branco!');
        }
    }
}
module.exports = DAOPontos;
