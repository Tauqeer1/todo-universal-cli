/**
 * the polyfills must be the first thing imported
 */
import './polyfills.ts';
import './__2.1.1.workaround.ts'; // temporary until 2.1.1 things are patched in Core
import * as path from 'path';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as compression from 'compression';
import { createEngine } from 'angular2-express-engine';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.node.module';
import { environment } from './environments/environment';
import config  from './server/config';
import { routes } from './server.routes';
import { authRoutes } from './server/auth';
import { userRoutes } from './server/api/user';
import { todoRoutes } from './server/api/todo';

mongoose.connect(config.mongoURL);
mongoose.connection.on('error', (err) => {
  console.log(`MongoDB connection error: ${err}`);
  process.exit(-1);
})

// App

const app  = express();
const ROOT = path.join(path.resolve(__dirname, '..'));
const port = process.env.PORT || 4200;

/**
 * enable prod mode for production environments
 */
if (environment.production) {
  enableProdMode();
}

/**
 * Express View
 */
app.engine('.html', createEngine({}));
app.set('views', path.join(ROOT, 'client'));
app.set('view engine', 'html');

/**
 * Enable compression
 */
app.use(compression());
app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({limit: '20mb', extended: false}));
app.use(morgan('dev'));

/**
 * serve static files
 */
app.use('/', express.static(path.join(ROOT, 'client'), {index: false}));

/**
 * place your api routes here
 */
// app.use('/api', api);
// app.use('/api/users', require('./server/api/user'));
app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api/auth', authRoutes);
// app.use('/api/todos', require('./server/api/todo'));
// app.use('/api/auth', require('./server/auth'));

/**
 * bootstrap universal app
 * @param req
 * @param res
 */
function ngApp(req: any, res: any) {
  res.render('index', {
    req,
    res,
    ngModule: AppModule,
    preboot: false,
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: req.hostname
  });
}

/**
 * use universal for specific routes
 */
app.get('/', ngApp);
routes.forEach(route => {
  app.get(`/${route}`, ngApp);
  app.get(`/${route}/*`, ngApp);
});

/**
 * if you want to use universal for all routes, you can use the '*' wildcard
 */

app.get('*', function (req: any, res: any) {
  res.setHeader('Content-Type', 'application/json');
  const pojo = {status: 404, message: 'No Content'};
  const json = JSON.stringify(pojo, null, 2);
  res.status(404).send(json);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
