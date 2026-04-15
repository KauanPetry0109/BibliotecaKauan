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

const criarLivro = async (titulo, autor, isbn, ano_publicacao) => {
    try {
        const query = `INSERT INTO livros (titulo, autor, isbn, ano_publicacao)
                       VALUES ($1, $2, $3, $4) RETURNING *`;
        const values = [titulo, autor, isbn, ano_publicacao];
        const result = await pool.query(query, [
            titulo,
            autor,
            isbn,
            ano_publicacao,
        ]);
        return result.rows[0];
    } catch (error) {
        console.error('Erro ao criar livro:', error);
        throw error;
    }
};

module.exports = {
    listarTodosLivros,
    buscarLivroPorId,
    criarLivro
};