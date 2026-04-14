const pool = require('../database/connection');

const listarTodosLivros = async() => {
    try {
        const result = await pool.query('SELECT * FROM livros ORDER BY id');
        return result.rows;
    } catch (error) {
        console.error('Erro ao listar livros:', error);
        throw error;
    }
};

const buscarLivroPorId = async id => {
    try {
        const result = await pool.query('SELECT * FROM livros WHERE id = $1', [Number(id)]);
        return result.rows[0] || null;
    } catch (error) {
        console.error('Erro ao buscar livro:', error);
        throw error;
    }
};

const criarLivro = async (titulo, autor, ano) => {
    const novoLivro = {
        id: acervo.length + 1,
        titulo,
        autor,
        ano,
        disponivel: true
    };

    acervo.push(novoLivro);
    return novoLivro;
};

module.exports = {
    listarTodosLivros,
    buscarLivroPorId,
    criarLivro
};