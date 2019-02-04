const Router = require('koa-router');
const router = new Router();
const Controller = require('./controller');
const jwt = require('../middleware/jwt');

router.get('/', Controller.findAll);
router.post('/',jwt,  Controller.create);
router.post('/:id', jwt, Controller.update);
router.delete('/:id', jwt, Controller.destroy);

module.exports = router.routes();