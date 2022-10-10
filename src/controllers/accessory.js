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
    const cube = await cubeService.getOne(req.params.id).lean();
    const accessories = await accessoryService.getAll().lean();
    console.log(cube);
    
    res.render('accessoryes/attach', { cube, accessories });
});

router.post('/attach/:id', async (req, res) => {
    const cube = await cubeService.getOne(req.params.id);
    const accessory = await accessoryService.getOne(req.body.accessory);

    cube.accessories.push(accessory);
    //await cube.save();
    console.log(cube);
    res.redirect(`/cube/details/${req.params.id}`);
});

module.exports = router;