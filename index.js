const express = require('express');
const app = express();
const routes = require('./src/routes/index.routes');
const { logger, errorHandler } = require('./src/middlewares/main.middlewares');


app.use(express.json());

app.use(logger);

app.use('/', routes);

app.get('/', (req, res) => {
    res.json({
        sistema: 'Biblioteca M4',
        status: 'online',
    });
});

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});