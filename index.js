const http = require('http');

console.log("[SISTEMA]: Iniciando servidor ...");

const server = http.createServer((req, res) => {
    console.log(`[REQUEST]: ${req.method} ${req.url}`);

    if (req.url === '/livros' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(
            JSON.stringify({
                status: 'Sucesso',
                acervo: [
                    'O Senhor dos Anéis',
                    "Assassin's Creed",
                    'Altered Carbon',
                    'Albion Online'
                ],
                total: 4,
            })
        );
    }

    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(
            JSON.stringify({
                mensagem: 'Seja bem-vindo a biblioteca',
                instrucao: 'Acesse /livros para ver o acervo',
            })
        );
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
        JSON.stringify({
            erro: 'Rota não encontrada'
        })
    );
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`[SERVIDOR]: Rodando em http://localhost:${PORT}`);
});