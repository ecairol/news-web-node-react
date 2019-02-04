const User = require('./model');
const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require('bcrypt');

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

async function auth (ctx) {
  // TODO: Add validation and throw error
  const data = new User(ctx.request.body);
  try {
    const user = await User.findOne({ username: data.username }).exec();

    const result = await new Promise((resolve, reject) => {
      bcrypt.compare(data.password, user.password, function(err, isMatch) {
        if (!err && isMatch) {
          const token = jsonwebtoken.sign({ username: user.username }, "G4gRG9lIiviYWRtaW5iOnRydwUsImp8aSi6IjF2Nz8l");
          resolve({
            body: token,
            status: 200
          });
        } else {
          reject({
            body: "Authentication failed",
            status: 401
          });
        }
      });
    });

    ctx.body = result.body;
    ctx.status = result.status;
  } catch(err) {
    console.log(err);
    throw err;
  }
}

module.exports = {
  findAll,
  create,
  auth
}