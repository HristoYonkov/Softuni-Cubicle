const router = require('express').Router();
const authService = require('../services/auth');

router.get('/register', (req, res) => {
    res.render('auth/register')
});

router.post('/register', async (req, res) => {
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


module.exports = router;