//export { config } from '@eduvault/shared';
import { config, utils } from '@eduvault/shared';
// for local build
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

export const {
  PREFIX_API,
  PREFIX_APP,
  PREFIX_EXAMPLE,
  LOCAL_HOST,
  //PORT_CYPRESS,
  //PORT_API,
  //PORT_APP,
  //PORT_EXAMPLE,

} = config;
// const PROD_HOST = process.env.VUE_APP_PROD_HOST;
const PROD_HOST = window.location.hostname.split('.').slice(-2).join('.');

//console.dir(process.env);
//console.log({ env: process.env });
//export const { isProdEnv, isDockerEnv } = utils;

//export const HOST = isProdEnv() ? PROD_HOST : LOCAL_HOST;

export const HOST = process.env.API_SERVER;
// const prefixes = [PREFIX_API, PREFIX_APP, PREFIX_EXAMPLE];
//const HTTP = 'https://';
//export const URL_API = `${HTTP}${PREFIX_API}${HOST}`;
//export const URL_API = `http://localhost:8082`;

export const URL_API = `https://api.nordok.co`;
export const URL_APP = `http://localhost:8081`;

//export const URL_EXAMPLE = `${HTTP}${PREFIX_EXAMPLE}${HOST}`;
export const API_WS = 'wss://' + HOST;
export const ROUTES = config.ROUTES;
export const STORAGE_KEY = 'sourcelink';
// console.log({ URL_API, URL_APP, API_WS });
