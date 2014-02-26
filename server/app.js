var koa = require('koa')
  , router = require('koa-router')
  , request = require('request')
  , app = koa()
  , serve = require('koa-static');

app.use(router(app));
// server static file
app.use(serve('.'));

var port = Number(process.env.PORT || 3000);
app.listen(port);
