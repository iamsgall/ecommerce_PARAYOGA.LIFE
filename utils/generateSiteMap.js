const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

const generateSiteMap = async () => {
  const pages = await globby([
    'pages/**/*.jsx',
    '!pages/_*.js',
    '!pages/**/[id].jsx',
    '!pages/api',
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(page => {
    const path = page
      .replace('pages', '')
      .replace('index.jsx', '')
      .replace('.jsx', '')
      .replace('.md', '');
    const route = path === '/index' ? '' : path;
    return `    <url>
        <loc>${`https://parayoga.life${route}`}</loc>
      </url>
  `;
  })
  .join('')}
</urlset>
`;
  fs.writeFileSync(
    'public/sitemap.xml',
    prettier.format(sitemap, {parser: 'html'})
  );
};

generateSiteMap();
