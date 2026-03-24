const livrosService = require('../services/livros.services');

const listarLivros = async (req, res) => {
    try {
        const livros = await livrosService.listarTodosLivros();
        res.status(200).json({ total: livros.length, livros });
    } catch (error) {
        res.status(500).json({ error: 'erro interno ao buscar os livros' });
    }
};

const buscarLivroPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const livro = await livrosService.buscarLivroPorId(id);
        if (!livro) {
            return res.status(404).json({ error: 'livro não encontrado' });
        }
        res.status(200).json(livro);
    } catch (error) {
        res.status(500).json({ error: 'erro interno ao buscar o livro' });
    }
};

module.exports = { listarLivros, buscarLivroPorId };