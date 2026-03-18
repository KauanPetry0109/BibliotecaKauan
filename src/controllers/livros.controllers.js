const livrosService = require('../services/livros.services');

const listarLivros = async (req, res) => {
    try {
        const livros = await livrosService.listarTodosLivros();
        res.status(200).json({ total: livros.length, livros });
    } catch (error) {
        res.status(500).json({ error: 'erro interno ao buscar os livros' });
    }
};

module.exports = { listarLivros };