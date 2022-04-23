$( document ).ready(function() {
    $( "#accordion" ).accordion({
        icons: false,
        collapsible: true,
        active: false,
        heightStyle: "content"
      });
    } );

    $( document ).ready(function() {
        $('.section-catalog__accordion-link').on('click', function(e) {
          e.preventDefault();
          $('.section-catalog__arkhiv-autor').each(function() {
              $(this).css('display', 'none');
          });
          var block = $(this).attr('href');
          $(block).css('display', 'block');
          var options = { duration: 400, easing: 'easeInOutCubic' };
      });
    });

    $( document ).ready(function() {
        $("a.scroll-to").on("click", function(e){
            e.preventDefault();
            var anchor = $(this).attr('href');
            $('html, body').stop().animate({
                scrollTop: $(anchor).offset().top - 0
            }, 400);
        });
    });
