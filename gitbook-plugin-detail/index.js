module.exports = {
  website: {
    assets: './assets',
    css: [
      'detail.css'
    ],
    js: [
      'selector.js'
    ]
  },
  hooks: {
    page: formatter
  }
}

function formatter(page) {
  page.content = page.content
    .replace(new RegExp('<p>%d%', 'g'),
      '<div class="detail dclose"><div class="dtitle">')
    .replace(new RegExp('%d%</p>', 'g'),
      '</div><div class="dcontent">')
    .replace(new RegExp('<p>%/d%</p>', 'g'),
      '</div></div>');

  return page;
}