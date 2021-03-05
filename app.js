$(document).ready(function () {



  



  // AL CLICK RIMUOVI LA CLASSE SELEZIONATA
  $("#btn").click(function () {
    $('span').removeClass('display_none');
    $('#btn').toggleClass('display_none');
    $('#login').addClass('display_none');
    if ($('span').hasClass('display_none') == false) {
      setTimeout(() => {
        $('.text_display_none').toggleClass('display_none');
        typeWriter();
      }, 6000);
    }
    
  });

  $("#trigger_view").click(function () {
    $('.contact_view').toggleClass('display_none');
  })



  
  
  // TYPEWRITE EFFECT
  var i = 0;
  var txt = "Grande appassionato di enogastronomia, una volta finite le superiori ho navigato per 15 anni nella ristorazione. Oggi cambio rotta ed apro le vele sul mondo del web e non solo. Grande amore, da sempre, portato avanti come hobby, dopo un 2020 che ha rivoluzionato le nostra vite ho seguito il vento del cambiamento ed ho ripreso i libri in mano per curare la mia formazione tecnologica grazie anche al supporto dell' accademia digitale Boolean.";
  var speed = 50;



  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typewriter").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }


});


