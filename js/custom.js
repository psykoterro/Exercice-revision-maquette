//Fixation de la barre de nav au scroll
$(window).scroll(function (event) {
    // A chaque fois que l'utilisateur va scroller (descendre la page)
    var y = $(this).scrollTop(); // On récupérer la valeur du scroll vertical

    //si cette valeur > à 200 on ajouter la class
    if (y >= 200) {
      $('.nav').addClass('fixed');
    } else {
      // sinon, on l'enlève
      $('.nav').removeClass('fixed');
    }
  });

//Effet de scroll plus fluide
$(document).ready(function(){
    // au clic sur un lien
    $('a[href^="#"]').on('click', function(evt){
       // bloquer le comportement par défaut: on ne rechargera pas la page
       evt.preventDefault();
       // enregistre la valeur de l'attribut  href dans la variable target
	var target = $(this).attr('href');
       /* le sélecteur $(html, body) permet de corriger un bug sur chrome
       et safari (webkit) */
	$('html, body')
       // on arrête toutes les animations en cours
       .stop()
       /* on fait maintenant l'animation vers le haut (scrollTop) vers
        notre ancre target */
       .animate({scrollTop: $(target).offset().top}, 1000 );
    });
});
