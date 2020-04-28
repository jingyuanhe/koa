const Koa=require('koa')
const Router = require('koa-router');
const app=new Koa();
const router = new Router();
router.get('/', (ctx, next) => {
    ctx.body = 'Hello World22'
  });
router.get('/demo', (ctx, next) => {
    ctx.body = 'Hello World'
  });


app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());

app.listen(3000)