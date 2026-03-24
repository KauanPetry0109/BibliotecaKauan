const express = require('express');
const router = express.Router();
const usuariosRoutes = require('../controllers/usuarios.routes');
const livrosRoutes = require('./livros.routes');

router.use('/usuarios', usuariosRoutes);
router.use('/livros', livrosRoutes);

router.get('/', (req, res) => {
    res.json({ sistema: 'Biblioteca Ralph & Teddy', status : 'online' });
});

router.use((req, res) => {
    res.status(404).json({ error: 'rota não encontrada' });
});

module.exports = router;