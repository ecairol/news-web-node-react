const News = require('./model');

async function find (ctx) {
  const id = ctx.params.id;
  const data = await News.findOne({ _id:id }).exec();
  ctx.body = data
}

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
  const news = await News.findOne({ _id:id }).exec();;
  const deleted = await news.remove();
  ctx.body = deleted;
}

async function update (ctx) {
  const id = ctx.params.id;
  const news = await News.findOne({ _id:id }).exec();
  const { title, description, date, image, featured } = ctx.request.body;
  news.title = title;
  news.description = description;
  news.date = date;
  news.image = image;
  news.featured = featured;

  const updated = await news.save();
  ctx.body = updated;
}

module.exports = {
  find,
  findAll,
  create,
  destroy,
  update
}