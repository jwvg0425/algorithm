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
  var expBegin = /<p>\[\[[\s\t]*detail((?:[\s\t])(.+))?[\s\t]*\]\]<\/p>/gi;
  var expEnd = /<p>\[\[[\s\t]*\/detail[\s\t]*\]\]<\/p>/gi;

  var content = page.content;
  var begins = content.match(expBegin) || [];
  var ends = content.match(expEnd) || [];

  if( begins.length != ends.length ){
    throw 'syntax error: pairs of detail are not matched';
  }

  begins.forEach(function(exp, i){
      var title = exp.replace(expBegin, "$2") || 'Learn more...';
      page.content = page.content
        .replace(exp,
          '<div class="detail dclose"><div class="dtitle">' + title + '</div><div class="dcontent">')
        .replace(expEnd,
          '</div></div>');
  });
  return page;
}
