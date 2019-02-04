const Router = require('koa-router');
const router = new Router();
const Controller = require('./controller');
const jwt = require('../middleware/jwt');

router.get('/', Controller.findAll);
router.post('/',  Controller.create);

module.exports = router.routes();