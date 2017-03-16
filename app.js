'use strict'
// const app = require('koa')();
const appKoa=require('koa');
const koa = require('koa-router');
const json = require('koa-json');
const logger = require('koa-logger');
// const koaBodyparser=require('koa-bodyparser');// 引入各种依赖

const app = new appKoa();

// app.use(koaBodyparser());
app.use(json());
app.use(logger());

app.use(function* (next){
  let start = new Date;
  yield next;
  let ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms); // 显示执行的时间
});

app.on('error', function(err, ctx){
  console.log('server error', err);
});

app.listen(8889,() => {
  console.log('Koa is listening in 8889');
});

module.exports = app;
