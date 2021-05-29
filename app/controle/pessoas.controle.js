'use strict';
var dbConn = require('../config/db.config');
const Pessoas = require('../lib/pessoas');
const dao = new Pessoas(dbConn);
exports.findAll = function(req, res) {
    dao.findAll(function(err, pessoas) {
        console.log('controle')
        if (err)
            res.send(err);
        console.log('res', pessoas);
        res.send(pessoas);
    });
};
exports.create = function(req, res) {
    const pessoa = req.body;
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        dao.create(pessoa, function(err, pessoas) {
            if (err)
                res.send(err);
            res.json({error:false,message:"Pessoas added successfully!",data:pessoas});
        });
    }
};
exports.findById = function(req, res) {
    dao.findById(req.params.id, function(err, pessoas) {
        if (err)
            res.send(err);
        res.json(pessoas[0]);
    });
};
exports.update = function(req, res) {
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		res.status(400).send({ error:true, message: 'Please provide all required field' });
	}else{
		dao.update(req.params.id, new Pessoas(req.body), function(err, pessoas) {
			if (err)
				res.send(err);
			res.json({ error:false, message: 'Pessoas successfully updated' });
		});
	}
};
exports.delete = function(req, res) {
    dao.delete( req.params.id, function(err, pessoas) {
        if (err)
            res.send(err);
        res.json({ error:false, message: 'Pessoas successfully deleted' });
    });
};
