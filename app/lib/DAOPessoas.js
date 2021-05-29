const mysql = require('mysql');

'use strict';
//DAOPessoas object create
const DAOPessoas = function(connection){
    this.connect = connection.connect;

    this.create = function (newEmp, result) {
        this.connect().then(c => {
            c.query("INSERT INTO pessoas set ?", newEmp, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
                c.release();
            });
        });
    };
    this.findById = function (id, result) {
        this.connect().then(c => {
            c.query("Select * from pessoas where id = ? ", id, function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });
        });
    };
    this.findAll = function (result) {
        this.connect().then(c => {
            c.query("Select * from pessoas", function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    console.log('pessoas : ', res);
                    result(null, res);
                }
            });
        });
    };
    this.update = function(id, pessoas, result){
        this.connect().then(c => {
            c.query("UPDATE pessoas SET nome=?, telefone=? WHERE id = ?", [pessoas.nome, pessoas.telefone, id], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }else{
                    result(null, res);
                }
            });
        });
    };
    this.delete = function(id, result){
        this.connect().then(c => {
            c.query("DELETE FROM pessoas WHERE id = ?", [id], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            });
        });
    };
};
module.exports = DAOPessoas;
