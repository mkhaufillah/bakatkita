$(document).ready(function() {
  //detail-product
  $(".showDet-pe").click(function() {
    window.location.replace('../detail-product');
    Cookies.set('id-card', $(this).attr('id'));
  });

  $(".showDet-ko").click(function() {
    window.location.replace('../detail-product/komunitas.html');
    Cookies.set('id-card', $(this).attr('id'));
  });
});
