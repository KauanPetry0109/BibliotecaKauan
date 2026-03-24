const express = require('express');
const livrosRoutes = require('./src/routes/livros.routes');
const usuariosRoutes = require('./src/routes/usuarios.routes');

const app = express();

app.use(express.json());
app.use('/livros', livrosRoutes);
app.use('/usuarios', usuariosRoutes);

app.get('/', (req, res) => {
    res.json({
        sistema: 'Biblioteca M4',
        status: 'online',
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});