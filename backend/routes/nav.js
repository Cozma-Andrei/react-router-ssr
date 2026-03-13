import express from 'express';
import { loadNavData, processNav } from '../utils/navigation.js';

const router = express.Router();

router.get('/', (req, res) => {
  const nav = loadNavData();
  processNav(req.path, nav);
  res.json(nav);
});

export default router;
