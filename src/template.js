export function renderPage({ title = 'By the Beach', main }) {
  return `<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <body>
    <main id="mainContent">
      ${main}
    </main>
  </body>
</html>`;
}
