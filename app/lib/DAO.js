const mysql = require('mysql');

'use strict';

class DAO {
    connect;
    tableName;
    constructor(connection, tableName='table_name') {
        this.connect = connection.connect;
        this.tableName = tableName;
    }

    valida(bean) {
    }
    getSqlInsert() {
        return 'INSERT INTO ' + this.tableName + ' set ?';
    }
    getSqlList() {
        return 'SELECT * FROM ' + this.tableName;
    }
    getSqlUpdate() {
        return 'UPDATE ' + this.tableName + ' SET ? WHERE id = ?';
    }
    getSqlDelete() {
        return 'DELETE FROM ' + this.tableName + ' WHERE id = ?';
    }
    insert(bean, result) {
        this.valida(bean);
        this.connect().then(c => {
            c.query(this.getSqlInsert(), bean, function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else {
                    result(null, res.insertId);
                }
                c.release();
            });
        });
    };
    findById(id, result) {
        this.connect().then(c => {
            c.query(this.getSqlList() + " WHERE id = ?", id, function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else {
                    result(null, res[0]);
                }
                c.release();
            });
        });
    };
    list(result) {
        this.connect().then(c => {
            c.query(this.getSqlList(), function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else {
                    result(null, res);
                }
                c.release();
            });
        });
    };
    update(id, bean, result){
        this.valida(bean);
        this.connect().then(c => {
            c.query(this.getSqlUpdate(), [bean, id], function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else {
                    result(null, res);
                }
                c.release();
            });
        });
    };
    delete(id, result){
        this.connect().then(c => {
            c.query(this.getSqlDelete(), [id], function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else {
                    result(null, res);
                }
                c.release();
            });
        });
    };
};

module.exports = DAO;
