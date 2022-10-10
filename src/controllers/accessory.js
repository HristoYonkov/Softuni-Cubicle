const router = require('express').Router();
const accessoryService = require('../services/acessory');
const cubeService = require('../services/cube')

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

router.get('/attach/:id', async (req, res) => {
    const cube = await cubeService.getOne(req.params.id);
    const accessories = await accessoryService.getAll();
    console.log(accessories);
    res.render('accessoryes/attach', { cube });
});

module.exports = router;