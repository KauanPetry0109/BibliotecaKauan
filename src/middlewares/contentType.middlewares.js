const validarContentType = (req, res, next) => {
    const metodosComBody = ['POST', 'PUT', 'PATCH']

    if (metodosComBody.includes(req.method)) {
        const contentType = req.headers['content-type'];

        if (!contentType || !contentType.includes('application/json')) {
            return res.status(415).json({ error: 'Tipo de conteúdo não suportado' });
        }
    }
    next();
};

module.exports = { validarContentType };