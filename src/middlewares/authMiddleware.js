const jwt = require('jsonwebtoken');
const secret = 'asdohjaksjdhxmijhfsciufxmgasildailujhmlcxihjb';
const { promisify } = require('util');

const jwtVerify = promisify(jwt.verify);

exports.auth = async (req, res, next) => {
    let token = req.cookies['user'];

    if (token) {
        try {
            let decodedToken = await jwtVerify(token, secret);
            req.user = decodedToken;
            res.locals.user = decodedToken;
            
        } catch (error) {
            return res.redirect('404');
        }
    }

    next();
}

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/');
    }

    next();
}