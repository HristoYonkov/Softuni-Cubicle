const router = require('express').Router();
const cubeService = require('../services/cube')

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const cube = req.body;

    // Validate
    if (cube.name == '') {
        return res.status(400).send('Invalid request');
    }

    // Save Data
    try {
        await cubeService.save(cube);
        res.redirect('/');
        
    } catch (error) {
        res.status(400).send(error);
    }

});

router.get('/details/:id', (req, res) => {
    const cube = cubeService.getOne(req.params.id);

    res.render('details', { cube });
});

module.exports = router;