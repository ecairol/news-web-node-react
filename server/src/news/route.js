const Router = require('koa-router');
const router = new Router();
const Controller = require('./controller');

router.get('/', Controller.findAll);
router.post('/', Controller.create);
router.post('/:id', Controller.update);
router.delete('/:id', Controller.destroy);

module.exports = router.routes();