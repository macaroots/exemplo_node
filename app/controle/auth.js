'use strict';

class AuthController {
    router;
    handler;
    getRouter() {
        if (!this.router) {
            const express = require('express');
            const router = express.Router();

            router.get('/', this.index);
            router.post('/login', this.login);
            router.get('/logout', this.logout);
            this.router = router;
        }
        return this.router;
    }
    index(req, res) {
        res.render('admin/auth');
    }
    login(req, res) {
        if (req.body.senha == '123') {
            res.redirect('/admin');
        }
        else {
            res.status(403).send({ ok: false, message: "Usuário ou senha inválidos!" });
        }
    }
    logout(req, res) {
        res.json({ ok: true, message: "Usuário deslogado com sucesso!" });
    }
    getHandler() {
        if (!this.handler) {
            this.handler = function (req, res, next) {
                if (req.query.id == 1) {
                    res.redirect('/auth');
                }
                else {
                    next();
                }
            };
        }
        return this.handler;
    }
}
module.exports = AuthController;
