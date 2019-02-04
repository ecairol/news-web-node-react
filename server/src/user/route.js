const Router = require('koa-router');
const router = new Router();
const Controller = require('./controller');
const jwt = require('../middleware/jwt');

router.post('/auth', Controller.auth);
router.get('/', jwt, Controller.findAll);
router.post('/', jwt, Controller.create);

module.exports = router.routes();