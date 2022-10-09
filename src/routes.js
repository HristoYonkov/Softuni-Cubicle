const router = require('express').Router();

const homeController = require('./controllers/home');
const cubeController = require('./controllers/cube');
const accessoryController = require('./controllers/accessory');

// router.get('/', homeController.index);

router.use('/', homeController);
router.use('/cube', cubeController);
router.use('/accessory', accessoryController);

module.exports = router;