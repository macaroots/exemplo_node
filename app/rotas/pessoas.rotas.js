const express = require('express')
const router = express.Router()
const pessoasControle = require('../controle/pessoas.controle');

router.get('/', pessoasControle.list);
router.post('/', pessoasControle.insert);
router.get('/:id', pessoasControle.findById);
router.put('/:id', pessoasControle.update);
router.delete('/:id', pessoasControle.delete);
module.exports = router
