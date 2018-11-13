function addSelector() {
  var detail = document.querySelectorAll('.detail');

  function resize() {
    detail.forEach(function(el){
      var content = el.querySelector('.dcontent');
      content.style.maxHeight = content.scrollHeight + 'px';
    });
  };

  detail.forEach(function(el){
    var btn = el.querySelector('.dtitle');
    btn.onclick = function(event){
      event.stopPropagation();

      var parent = event.target.parentNode;
      parent.className = ~parent.className.indexOf('dclose') ? 'detail' : 'detail dclose';

      var content = this.nextElementSibling;
      content.style.maxHeight = content.scrollHeight + 'px';

      // after css animation
      setTimeout(resize, 500);
    };
  });
}

require(['gitbook'], function (gitbook) {
  gitbook.events.bind('page.change', addSelector);
});
