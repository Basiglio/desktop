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
      }, 3500);
      setTimeout(() => {
        $('.contact').removeClass('display_none')
      }, 10000);
    }
    
  });


  $("#trigger_view").click(function () {
    $('.contact_view').toggle('display_none');
     if (!$('.contact_view').hasClass('display_block') == true) {
      $('#trigger_view').addClass('display_none');
     } 
  });


  // GESTIONE EXIT

  // EXIT STACK
  $('#exit_stack').click(function () {
    $('.content_back_left').toggle('display_none');
  });
  // EXIT NAME
  $('#exit_name').click(function () {
    $('.content_left').toggle('display_none');
  });

  // EXIT STORY
  $('#exit_story').click(function () {
    $('.content_right').toggle('display_none');
  });

  // EXIT CONTACT
  $('#exit_contact').click(function () {
    $('.contact_view').toggle('display_block');
    if ($('.contact_view').hasClass('display_none')) {
      $('#trigger_view').addClass('display_block');
    }
  });


  

  

  



  
  
  // TYPEWRITE EFFECT
  var i = 0;
  var txt = "Grande appassionato di enogastronomia, una volta finite le superiori ho navigato per 15 anni nella ristorazione. Oggi cambio rotta ed apro le vele sul mondo del web e non solo. Grande amore, da sempre, portato avanti come hobby, dopo un 2020 che ha rivoluzionato le nostre vite ho seguito il vento del cambiamento ed ho ripreso i libri in mano per curare la mia formazione tecnologica grazie anche al supporto dell' accademia digitale Boolean.";
  var speed = 50;



  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("typewriter").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }


});


