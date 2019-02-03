const News = require('./model');

async function findAll (ctx) {
  const todos = await News.find({})
  ctx.body = todos
}

async function create (ctx) {
  const news = new News(ctx.request.body);
  const savedNews = await news.save();
  ctx.body = savedNews;
}

async function destroy (ctx) {
  const id = ctx.params.id;
  const news = await New.findById(id);
  const deletedNews = await news.remove();
  ctx.body = deletedNews;
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