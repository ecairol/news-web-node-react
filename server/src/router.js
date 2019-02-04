module.exports = (router, app) => {
  router.prefix('/v1');
  router.use('/news', require('./news/route'));
}