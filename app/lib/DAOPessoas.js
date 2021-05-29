const DAO = require('./DAO.js');

class DAOPessoas extends DAO {
    getSqlInsert() {
        return 'INSERT INTO pessoas set ?';
    }
    getSqlList() {
        return 'SELECT * FROM pessoas';
    }
    getSqlUpdate() {
        return 'UPDATE pessoas SET ? WHERE id = ?';
    }
    getSqlDelete() {
        return 'DELETE FROM pessoas WHERE id = ?';
    }
    valida(bean) {
        if (bean.nome == '') {
            throw new Error('Nome não pode ser em branco!');
        }
    }
}
module.exports = DAOPessoas;
