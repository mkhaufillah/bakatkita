$(document).ready(function() {
  var conMan = false;
  var firstLoad = true;
  var ec = $('#content-comunity');
  var em = $('#content-management');
  $('.management-btn').click(function() {
    if (!conMan) {
      ec.css('display', 'none');
      if (firstLoad) {
        em.load('../assets/page-sniff/sniff-content-m-comunity.html');
        firstLoad = false;
      } else {
        em.css('display', 'block');
      }
      conMan = true;
    } else {
      ec.css('display', 'block');
      em.css('display', 'none');
      conMan = false;
    }
  });
});
