const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const cubeService = require('../services/cube');


router.get('/create', isAuth, (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const cube = req.body;
    cube.owner = req.user._id;

    // Validate
    if (cube.name == '') {
        return res.status(400).send('Invalid request');
    }

    // Save Data
    try {
        await cubeService.create(cube);
        res.redirect('/');

    } catch (error) {
        res.status(400).send(error);
    }

});

router.get('/details/:id', async (req, res) => {
    const cube = await cubeService.getOne(req.params.id).lean();
    const accessories = cube.accessories;
    const isOwner = cube.owner == req.user?._id;

    res.render('details', { cube, accessories, isOwner });
});

router.get('/edit/:id', async (req, res) => {
    const cube = await cubeService.getOne(req.params.id).lean();

    //TODO: Add mesasge!
    if (cube.owner != req.user._id) {
        return res.redirect('404')
    }

    res.render('cube/edit', { cube });
});

router.post('/edit/:id', async (req, res) => {
    await cubeService.edit(req.params.id, req.body)
    console.log(req.body);

    res.redirect(`/cube/details/${req.params.id}`);
});

router.get('/delete/:id', async (req, res) => {
    const cube = await cubeService.getOne(req.params.id).lean();

    res.render('cube/delete', { cube });
})

router.post('/delete/:id', async (req, res) => {
    await cubeService.delete(req.params.id);

    res.redirect('/');
})

module.exports = router;