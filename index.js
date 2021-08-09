'use strict';

const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

const { PORT = 3001 } = process.env;

router.get('/test', async (ctx) => {
    ctx.body = {
        foo: 'bar'
    };
});

router.get('/healtz', async (ctx) => {
    ctx.body = 'Ok';
});

app.use(router.routes());

app.listen(PORT, () => {
    console.log('Server is listening u motherfucker');
})