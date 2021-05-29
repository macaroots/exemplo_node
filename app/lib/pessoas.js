'use strict';
//Pessoas object create
var Pessoas = function(connection){
    this.connection = connection
};
Pessoas.create = function (newEmp, result) {
    this.connection.query("INSERT INTO pessoas set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Pessoas.findById = function (id, result) {
    this.connection.query("Select * from pessoas where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
Pessoas.findAll = function (result) {
	this.connection.query("Select * from pessoas", function (err, res) {
		if(err) {
		  console.log("error: ", err);
		  result(null, err);
		}
		else{
		  console.log('pessoas : ', res);
		  result(null, res);
		}
	});
};
Pessoas.update = function(id, pessoas, result){
    this.connection.query("UPDATE pessoas SET nome=?, telefone=? WHERE id = ?", [pessoas.nome, pessoas.telefone, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};
Pessoas.delete = function(id, result){
    this.connection.query("DELETE FROM pessoas WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
module.exports = Pessoas;
