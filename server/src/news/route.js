const Router = require('koa-router');
const router = new Router();
const Controller = require('./controller');
const jwt = require('../middleware/jwt');

router.get('/', Controller.findAll);
router.post('/', jwt, Controller.create);
router.get('/:id', Controller.find);
router.put('/:id',  Controller.update);
router.delete('/:id', jwt, Controller.destroy);

module.exports = router.routes();