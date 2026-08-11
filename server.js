import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { createRouter } from './src/routes/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const DEV = process.env.NODE_ENV !== 'production';

let vite;
if (DEV) {
  const { createServer: createViteServer } = await import('vite');
  vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });
  app.use(vite.middlewares);
} else {
  app.use(express.static(join(__dirname, 'public')));
}

app.use('/', createRouter(vite));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
