// require packages
const Koa = require('koa');
const router = require('koa-router')();
const Cors = require('@koa/cors');
const koastatic = require('koa-static');
const mongoose = require('mongoose');

const app = new Koa();

app.use(Cors());

require('./src/router')(router);
app.use(router.routes());
app.use(koastatic('./build'));

app.use(router.allowedMethods());

mongoose.connect('mongodb://localhost:27017/fl-news', {useNewUrlParser: true});

app.listen(3001);
