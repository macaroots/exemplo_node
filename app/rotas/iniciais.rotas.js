const express = require('express')
const router = express.Router()
const controle = require('../controle/index.controle');

router.get('/pessoas', controle.index);
router.get('/admin/pessoas', controle.adminPessoas);
router.get('/', controle.mapa);
module.exports = router
