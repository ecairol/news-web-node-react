// require packages
const Koa = require('koa');
const router = require('koa-router')();
const mongoose = require('mongoose');

const app = new Koa();

require('./src/router')(router);
app.use(router.routes());
app.use(router.allowedMethods());

mongoose.connect('mongodb://localhost:27017/fl-news', {useNewUrlParser: true});

app.listen(3000); // default
