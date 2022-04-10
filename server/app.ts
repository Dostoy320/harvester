import Koa from 'koa';
import path from 'path';
import serve from 'koa-static';

const staticDirPath = path.join(__dirname, '../public');
const port = 3000;

const app = new Koa();
app.use(serve(staticDirPath));

app.listen(port);
console.log(`App listening on port ${port}...`);