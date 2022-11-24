import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send({ success: true }).status(200);
});

export default router;
