const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');

const staticDirPath = path.join(__dirname, 'public');

app.use(serve(staticDirPath));

app.listen(3000);