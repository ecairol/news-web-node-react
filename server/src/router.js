module.exports = (router) => {
  router.prefix('/v1');
  router.use('/news', require('./news/route'));
  router.use('/users', require('./user/route'));
}