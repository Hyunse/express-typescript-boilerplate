import { Request, Response, Router } from 'express';

const router = Router();

router.get('/*', function(req: Request, res: Response, next){ 
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  next(); 
});

router.get('/', (req: Request, res: Response) => {
  res.send({ success: true }).status(200);
});

export default router;
