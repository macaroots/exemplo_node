'use strict';

class CrudController {
    dao;
    constructor(dao) {
        this.dao = dao;
        this.list = this.list.bind(this);
        this.insert = this.insert.bind(this);
        this.findById = this.findById.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    getRouter() {
        const express = require('express')
        const router = express.Router()

        router.get('/', this.list);
        router.post('/', this.insert);
        router.get('/:id', this.findById);
        router.put('/:id', this.update);
        router.delete('/:id', this.delete);
        return router;
    }
    list(req, res) {
        this.dao.list(function(err, pessoas) {
            if (err)
                res.send(err);
            res.send(pessoas);
        });
    };
    getBean(body) {
        return body;
    }
    insert(req, res) {
        try {
            let bean = this.getBean(req.body);
            this.dao.insert(bean, function(err, id) {
                if (err)
                    res.send(err);
                res.json({error: false, message: "Registro adicionado com sucesso!", id: id});
            });
        } catch (e) {
            res.status(400).send({error: true, message: e.toString()});
        }
    };
    findById(req, res) {
        this.dao.findById(req.params.id, function(err, bean) {
            if (err)
                res.send(err);
            res.json(bean);
        });
    };
    update(req, res) {
        try {
            let bean = this.getBean(req.body);
            this.dao.update(req.params.id, bean, function(err, r) {
                if (err)
                    res.send(err);
                res.json({error: false, message: 'Registro alterado com sucesso' });
            });
        } catch (e) {
            res.status(400).send({error: true, message: e.toString() });
        }
    };
    delete(req, res) {
        this.dao.delete(req.params.id, function(err, r) {
            if (err)
                res.send(err);
            res.json({error: false, message: 'Registro apagado com sucesso' });
        });
    };
}
module.exports = CrudController;
