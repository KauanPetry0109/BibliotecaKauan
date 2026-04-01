const acervo = [
    {
        id: 1,
        titulo: 'O Senhor dos Anéis',
        autor: 'J.R.R. Tolkien',
        ano: 1954,
        disponivel: true
    },
    {
        id: 2,
        titulo: "Assassin's Creed",
        autor: 'Oliver Bowden',
        ano: 2012,
        disponivel: true
    },
    {
        id: 3,
        titulo: 'Altered Carbon',
        autor: 'Richard K. Morgan',
        ano: 2002,
        disponivel: false
    },
];

const listarTodosLivros = async() => {
    return acervo;
};

const buscarLivroPorId = async id => {
    const livro = acervo.find(livro => livro.id === Number(id));
    return livro || null;
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