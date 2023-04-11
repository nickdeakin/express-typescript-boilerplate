import express, { Express, Request, Response } from 'express';
import { V1Controller } from './controllers/v1';
import { asyncMiddleware } from './middleware';

export const app = () => {
  const app: Express = express();
  app.use(express.json());

  const v1Controller = new V1Controller(app);
  app.use('/api/v1', v1Controller.router);

  const getHome = async (_req: express.Request, res: express.Response, user: any) => {
    res.status(200).send('Use /api/v1');
  };

  app.get('/', asyncMiddleware(getHome));

  return app;
};
