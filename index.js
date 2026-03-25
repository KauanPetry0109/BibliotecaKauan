const express = require('express');
const app = express();
const routes = require('./src/routes/index.routes');

app.use(express.json());


app.use('/', routes);

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next()
}
);

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