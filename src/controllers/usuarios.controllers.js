const usuariosService = require('../services/usuarios.services');

const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await usuariosService.listarUsuarios();
        res.status(200).json({ total: usuarios.length, usuarios });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'erro interno ao buscar os usuarios' });
    }
};

const buscarUsuarioPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await usuariosService.buscarUsuarioPorId(id);
        if (!usuario) {
            return res.status(404).json({ error: 'usuario não encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'erro interno ao buscar o usuario' });
    }
};

const criarUsuario = async (req, res) => {
    const { nome, email } = req.body;
    try {
        const novoUsuario = await usuariosService.criarUsuario(nome, email);
        res.status(201).json(novoUsuario);
    } catch (error) {
        res.status(500).json({ error: 'erro interno ao criar o usuario' });
    }
};

module.exports = { listarUsuarios, buscarUsuarioPorId, criarUsuario };