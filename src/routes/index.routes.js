const express = require('express');
const router = express.Router();
const livrosRoutes = require('./livros.routes');
const usuariosRoutes = require('./usuarios.routes');
const { logger } = require('../middlewares/main.middlewares');

router.use(logger);
router.use('/usuarios', usuariosRoutes);
router.use('/livros', livrosRoutes);

router.get('/', (req, res) => {
    res.json({ sistema: 'Biblioteca Ralph & Teddy', status: 'online' });
});

router.use((req, res) => {
    res.status(404).json({ error: 'rota não encontrada' });
});

module.exports = router;