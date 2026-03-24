const usuarios = [
    { id: 1, nome: "João", email: "joao@example.com", senha: "123456" },
    { id: 2, nome: "Maria", email: "maria@example.com", senha: "123456" },
    { id: 3, nome: "Pedro", email: "pedro@example.com", senha: "123456" }
]

const listarTodosUsuarios = async() => {
    return usuarios;
}

const buscarUsuarioPorId = async id => {
    const usuario = usuarios.find(usuario => usuario.id === Number(id));
    return usuario || null;
}

const criarUsuario = async ({ nome, email }) => {
    if (!nome || !email) {
        throw new Error("Nome e email são obrigatórios");
    }
    const novoUsuario = {
        id: usuarios.length + 1,
        nome,
        email,
        senha: "123456"
    };
    usuarios.push(novoUsuario);
    return novoUsuario;
};

module.exports = {
    listarTodosUsuarios,
    buscarUsuarioPorId,
    criarUsuario
}