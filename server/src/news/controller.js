const News = require('./model');

async function findAll (ctx) {
  const data = await News.find({})
  ctx.body = data
}

async function create (ctx) {
  // TODO: Add validation and throw error
  const news = new News(ctx.request.body);
  const saved = await news.save();
  ctx.body = saved;
}

async function destroy (ctx) {
  const id = ctx.params.id;
  const news = await News.findById(id);
  const deleted = await news.remove();
  ctx.body = deleted;
}

async function update (ctx) {
  const id = ctx.params.id;
  const news = await News.findById(id);
  news.title = news.title + ' updated';

  const updatedNews = await todo.save();
  ctx.body = updatedNews;
}

module.exports = {
  findAll,
  create,
  destroy,
  update
}