jQuery(document).ready(function ($) {
  var longWayOff = new Date("September 24, 2021 16:00:00");
  // var currentLang = $('html').attr('lang');
  // var layoutString = '';

  // if( currentLang.length && currentLang === 'en' ) {
  // 	layoutString = '<div class="counter__item">{on}<span class="counter__label">{ol}</span></div> <div class="counter__item">{dn}<span class="counter__label">{dl}</span></div> <div class="counter__item">{hn}<span class="counter__label">{hl}</span></div>';
  // } else {
  // 	layoutString = '<div class="counter__item">{on}<span class="counter__label">{ol}</span></div> <div class="counter__item">{dn}<span class="counter__label">{dl}</span></div> <div class="counter__item">{hn}<span class="counter__label">{hl}</span></div>';
  // }

  //toto obsahuje aj mesiace
  // $("#countdown").countdown({
  //   until: longWayOff,
  //   format: "odH",
  //   layout:
  //     '<div class="counter__item">{on}<span class="counter__label">{ol}</span></div> <div class="counter__item">{dn}<span class="counter__label">{dl}</span></div> <div class="counter__item">{hn}<span class="counter__label">{hl}</span></div>',
  // });

  //toto neobsahuje mesiace
  $("#countdown").countdown({
    until: longWayOff,
    format: "odH",
    layout:
      '<div class="counter__item">{dn}<span class="counter__label">{dl}</span></div> <div class="counter__item">{hn}<span class="counter__label">{hl}</span></div>',
  });
  

  
});
