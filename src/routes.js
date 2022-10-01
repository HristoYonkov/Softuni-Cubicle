const router = require('express').Router();

const homeController = require('./controllers/home');
const cubeController = require('./controllers/cube');

// router.get('/', homeController.index);

router.use('/', homeController);
router.use('/cube', cubeController);

module.exports = router;
