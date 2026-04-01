const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livros.controllers');

router.get('/', livrosController.listarLivros);
router.get('/:id', livrosController.buscarLivroPorId);
router.post('/', livrosController.criarNovoLivro);


module.exports = router;