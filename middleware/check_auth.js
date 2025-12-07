const jwt = require('jsonwebtoken')
require('dotenv').config

const authenticateToken = (req, res, next) => {
    let jwtToekn;
    const authHeader = req.headers['authorization']
    if (authHeader !== undefined) {
        jwtToekn = authHeader.split(' ')[1]
    }

    if (jwtToekn) {
        jwt.verify(jwtToekn, process.env.SECRET_TOKEN, async (error, paylod) => {
            if (error) {
                res.status(404).json({
                    error_msg: 'Invalid JSON token'
                })
            } else {
                req.id = paylod.id
                next()
            }
        })
    } else {
        res.status(404).json({
            error_msg: 'You are not authorize to do so.'
        })
    }
}

module.exports = {
    authenticateToken: authenticateToken
}