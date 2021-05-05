$(".deleteArticle").click(function () {
    Swal.fire({
        title: 'Êtes-vous sûr de le faire!',
        text: 'Vous ne pourrez pas récupérer cet article après l\'avoir supprimé!',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor : '#3085d6',
        confirmButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimez-le!',
        cancelButtonText: 'Non, garde-le'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Supprimé!',
            'Votre article a été supprimé.',
            'success'
          )
        }
      })
});
$(".filterTable").keyup(function () {
    alert("qsdcsdv");
});
$(".setSlugName").keyup(function () {
    alert("qsdcsdv");
});
$(document).ready(function(){
  $('#editor').summernote({
    placeholder: '...',
    height: 350,
  });
});