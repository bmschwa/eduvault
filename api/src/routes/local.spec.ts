import mongoose from 'mongoose';
import { request, connectDB, stopDB, pwAuthReq, pwAuthWithCookie, ROUTES } from '../utils/testUtil';

const password = 'Password123';
const accountID = 'person@email.com';

describe(`POST '/auth/local'`, () => {
  let db: mongoose.Connection;
  beforeAll(async () => {
    db = await connectDB();
  });
  afterAll(async () => {
    await stopDB(db);
  });
  it('rejects signup with no accountID', async () => {
    const res = await pwAuthReq({ password, accountID: null });
    // console.log('signup result', res.body);
    expect(401);
    expect(res.body.message).toEqual('invalid signup');
  });
  it('rejects signup with no password', async () => {
    const res = await pwAuthReq({ password: null, accountID });
    // console.log('signup result', res.body);
    expect(401);
    expect(res.body.message).toEqual('invalid signup');
  });
  it('Accepts valid signup', async () => {
    const res = await pwAuthReq({ password, accountID });
    // console.log('signup result', res.body);
    expect(res.status).toEqual(200);
    expect(res.body.code).toEqual(200);
    expect(res.body.data);
    expect(typeof res.body.data.jwt).toBe('string');
    expect(res.body.data.jwt.length).toBeGreaterThan(10);
    expect(typeof res.body.data.pwEncryptedPrivateKey).toBe('string');
    expect(res.body.data.pwEncryptedPrivateKey.length).toBeGreaterThan(10);
    expect(typeof res.body.data.pubKey).toBe('string');
    expect(res.body.data.pubKey.length).toBeGreaterThan(10);
    expect(typeof res.body.data.threadIDStr).toBe('string');
    expect(res.body.data.threadIDStr.length).toBeGreaterThan(10);
  });
  let cookie: string;
  it('Accepts valid sign in', async () => {
    const res = await pwAuthReq({ password, accountID });
    // console.log('signup result', res.headers['set-cookie']);
    expect(res.status).toEqual(200);
    expect(res.body.code).toEqual(200);
    expect(res.body.data);
    expect(res.headers['set-cookie'][0]).toContain('koa.sess=');
    cookie = res.headers['set-cookie'];
  });
  it('Now authorizes', async () => {
    const req = request().get(ROUTES.AUTH_CHECK);
    req.set('Cookie', cookie);
    const res = await req;
    expect(res.status).toEqual(200);
    expect(res.body.code).toEqual(200);
    // console.log(res.body);
  });
  it('Can get jwts', async () => {
    const res = await pwAuthWithCookie(request().get(ROUTES.GET_JWT));
    // console.log('jwts', res.body.data.jwt);
    expect(res.status).toEqual(200);
    expect(res.body.code).toEqual(200);
    expect(res.body.data).toHaveProperty('jwt');
    expect(typeof res.body.data.jwt).toBe('string');
    expect(res.body.data.jwt.length).toBeGreaterThan(10);
  });
});
