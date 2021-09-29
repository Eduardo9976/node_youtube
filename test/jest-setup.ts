import { SetupServer } from '@src/server';
import supertest from 'supertest';

let server: SetupServer;
beforeAll(async () => {
  server = new SetupServer();
  await server.init();
  (global as any).testRequest = supertest(server.getApp());
});

// afterAll(async () => await server.close());
