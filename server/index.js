// require packages
const Koa = require('koa');
const KoaRouter = require('koa-router')();
const KoaBodyParser = require('koa-bodyparser');
const KoaBody = require('koa-body');
const Cors = require('@koa/cors');
const koastatic = require('koa-static');
const mongoose = require('mongoose');

const app = new Koa();

//app.use(Helmet());
app.use(Cors());
app.use(koastatic('./build'));

app.use(KoaBody({ multipart: true }));
app.use(KoaBodyParser({
  enableTypes: ['json', ''],
  jsonLimit: '8mb',
  strict: true,
  onerror: function (err, ctx) {
    ctx.throw('Error with body parser.', 422)
  }
}))

// Database
mongoose.connect('mongodb://localhost:27017/fl-news', {useNewUrlParser: true});

// Routes
require('./src/router')(KoaRouter);
app.use(KoaRouter.allowedMethods());
app.use(KoaRouter.routes());


app.listen(3001);
