function addSelector() {
  var detail = document.querySelectorAll('.detail');
  detail.forEach(function(el){
    var btn = el.querySelector('.dtitle');
    btn.onclick = function(event){
      event.stopPropagation();

      var parent = event.target.parentNode;
      parent.className = ~parent.className.indexOf('dclose') ? 'detail' : 'detail dclose';

      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    };
  });
}

require(['gitbook'], function (gitbook) {
  gitbook.events.bind('page.change', addSelector);
});
