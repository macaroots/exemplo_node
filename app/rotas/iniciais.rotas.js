const express = require('express')
const router = express.Router()
const controle = require('../controle/index.controle');

router.get('/', controle.index);
router.get('/admin/pessoas', controle.adminPessoas);
module.exports = router
