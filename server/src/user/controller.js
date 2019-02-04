const User = require('./model');

async function findAll (ctx) {
  const data = await User.find({});
  ctx.body = data;
}

async function create (ctx) {
  // TODO: Add validation and throw error
  const user = new User(ctx.request.body);
  const saved = await user.save();
  ctx.body = saved;
}

module.exports = {
  findAll,
  create
}