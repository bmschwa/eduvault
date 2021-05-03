/** Provides nodejs access to a global Websocket value, required by Hub API */
(global as any).WebSocket = require('isomorphic-ws');
//import Koa from 'koa';
const Koa = require('koa');
import websockify from 'koa-websocket';

import { newLocalDB } from './textile/helpers';
import passportInit from './auth/passportInit';
import routerInit from './routes';
import personAuthRoute from './routes/wssPersonAuthRoute';

import cors from '@koa/cors';
import koaResponse from 'koa-response2';
import cookie from 'koa-cookie';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';

import { config, CORS_CONFIG, URL_API, URL_APP } from './config';

const requestId = require('@kasa/koa-request-id');
const logging = require('@kasa/koa-logging');

const pino = require('pino');
/*


import sslify, { xForwardedProtoResolver } from 'koa-sslify';
import ip from 'ip';R

const requestId = require('@kasa/koa-request-id');
const logging = require('@kasa/koa-logging');

const pino = require('pino');

import { newLocalDB } from './textile/helpers';
import passportInit from './auth/passportInit';
import routerInit from './routes';
import personAuthRoute from './routes/wssPersonAuthRoute';
import { config, CORS_CONFIG, URL_API, URL_APP } from './config';
import { isTestEnv, utils } from './utils';
import { clearCollections } from './utils/clearCollections';
import { populateDB } from './utils/populateDB';
const k_app = new Koa();

// We should parameterize this to turn logging on and off...
k_app.use(logging({logger: pino()}));

const app = websockify(k_app);
app.proxy = true;

/** Middlewares */
app.use(async function handleGeneralError(ctx, next) {
  try {
    await next();
  } catch (error) {
    console.log(error, error.message);
    ctx.internalServerError(error, error);
  }
});

export { newLocalDB, passportInit, routerInit, personAuthRoute };

// Lets try this approach.  specifically; remove nearly all mentions of "app" here and instead set up koa stuff
// https://koajs.com/#introduction

app.use(cookie());
app.use(cors(CORS_CONFIG));
app.use(bodyParser());
app.use(helmet());
app.use(
  koaResponse({
    format(status, payload, message = '') {
      return {
        code: status,
        data: payload,
        message: message,
        debugging: "nonsense @ " + Date.now(),
      };
    },
  }),
);




const API_LISTEN_PORT = process.env.API_LISTEN_PORT;
if (typeof API_LISTEN_PORT === 'undefined'){
  throw new Error("Set API_LISTEN_PORT!");
}


app.listen(API_LISTEN_PORT, async () => {
  /** Database */
  const db = await newLocalDB('eduvault-api');
  if ('error' in db) {
    console.log('error loading db');
    return;
  }

  // This should be in a test case startUp I think.
  // populate with dummy app info
  // if (!isProdEnv()) {
  //  await clearCollections(db);
  //  await populateDB(db);
  // }

  /** Passport */
  const passport = passportInit(app, db);
  /** Routes */
  routerInit(app, passport, db);
  /** Websockets */
  personAuthRoute(app, db);

  console.log(
    `Koa server listening at :${API_LISTEN_PORT}`,
  );
});

export default app;
