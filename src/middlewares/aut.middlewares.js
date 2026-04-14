const CHAVE_ACESSO = 'bibliotecaKauan';

const autenticar = (req, res, next) => {
    const autHeader = req.headers['authorization'];
    if (!autHeader) {
        return res.status(401).json({
            erro: 'Acesso negado: chave de acesso ausente',
        })
    };

    const token = autHeader.split(' ')[1];
    if (token !== CHAVE_ACESSO) {
        return res.status(403).json({
            erro: 'Acesso negado: chave de acesso inválida',
        })
    };

    next();
}
module.exports = { autenticar };