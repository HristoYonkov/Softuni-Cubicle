const router = require('express').Router();
const authService = require('../services/auth');
const { isEmail } = require('validator');

router.get('/register', (req, res) => {
    res.render('auth/register')
});

router.post('/register', async (req, res) => {
    if (!isEmail(req.body.username)) {
        return res.status(404).send('Invalid Email')
    }

    let createdUser = await authService.register(req.body);
    console.log(createdUser);

    if (createdUser) {
        res.redirect('/auth/login');
    } else {
        //TODO: add notification
        res.redirect('404')
    }
});

router.get('/login', (req, res) => {
    res.render('auth/login')
});

router.post('/login', async (req, res) => {
    let token = await authService.login(req.body);

    if (!token) {
        return res.redirect('404');
    }
    res.cookie('user', token, { httpOnly: true });

    res.redirect('/');
});

router.get('/logout', (req, res) => {
    res.clearCookie('user')
    res.redirect('/');
});

module.exports = router;