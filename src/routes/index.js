import { Router } from 'express';
import { renderPage } from '../template.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const templatePath = join(__dirname, '../template.js');

export function createRouter(vite) {
  const router = Router();

  router.get('/', async (req, res, next) => {
    try {
      let render = renderPage;
      if (vite) {
        const mod = await vite.ssrLoadModule(templatePath);
        render = mod.renderPage;
      }

      let html = renderPage({
        title: 'Web accessibility',
        main: `
          <h1>Web accessibility</h1>
          <p>Useful for everyone, essential for some.</p>
        `,
      });

      if (vite) {
        html = await vite.transformIndexHtml(req.url, html);
      }

      res.send(html);
    } catch (err) {
      vite?.ssrFixStacktrace(err);
      next(err);
    }
  });

  return router;
}
