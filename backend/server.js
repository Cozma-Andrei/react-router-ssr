import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequestHandler } from '@react-router/express';
import navRouter from './routes/nav.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 9000;

app.use(
  '/assets',
  express.static(path.resolve(__dirname, '../frontend/build/client/assets'))
);

app.use('/api/nav', navRouter);

const buildPath = path.resolve(__dirname, '../frontend/build/server/index.js');

app.all(
  '*',
  createRequestHandler({
    build: await import(buildPath),
  })
);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
