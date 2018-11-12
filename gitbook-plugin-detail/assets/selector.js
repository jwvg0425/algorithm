function addSelector() {
  var detail = document.querySelectorAll('.detail');
  Object.keys(detail)
    .forEach(function(index) {
      detail[index].onclick = function(event) {
        if(event.target.className !== 'dtitle') {
          return null;
        }

        event.stopPropagation();

        detail[index].className = ~detail[index].className.indexOf('dclose') ? 'detail' : 'detail dclose';
      }
    
    });
}

require(['gitbook'], function (gitbook) {
  gitbook.events.bind('page.change', addSelector);
});