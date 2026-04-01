const express = require('express');
const router = express.Router();
const livrosRoutes = require('./livros.routes');
const usuariosRoutes = require('./usuarios.routes');
const { autenticar } = require('../middlewares/aut.middlewares');
const { validarContentType } = require('../middlewares/contentType.middlewares');


router.get('/', (req, res) => {
    res.json({ sistema: 'Biblioteca Ralph & Teddy', status: 'online' });
});

router.use(autenticar);
router.use(validarContentType);
router.use('/usuarios', usuariosRoutes);
router.use('/livros', livrosRoutes);

router.use((req, res) => {
    res.status(404).json({ error: 'rota não encontrada' });
});

module.exports = router;