const router = require('express').Router();
const accessoryService = require('../services/acessory');

router.get('/create', (req, res) => {
    res.render('accessoryes/create');
});

router.post('/create', async (req, res) => {
    if (req.body.name == '') {
        return res.status(400).send('Invalid request');
    }
    
    try {
        await accessoryService.create(req.body);
        res.redirect('/');

    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;