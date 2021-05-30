const DAO = require('./DAO.js');

class DAOPessoas extends DAO {
    constructor(connection, tableName='pessoas') {
        super(connection, tableName);
    }
    valida(bean) {
        if (bean.nome == '') {
            throw new Error('Nome não pode ser em branco!');
        }
    }
}
module.exports = DAOPessoas;
