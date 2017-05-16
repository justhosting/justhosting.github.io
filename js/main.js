'use strict';

;$( function() {

  var $window = $(window);

  function init() {
    fitToViewportHeight();
    initEventListeners();
  }

  function initEventListeners() {
    $window.resize( onWindowResize );
  }

  function onWindowResize( event ) {
    fitToViewportHeight();
  }

  function fitToViewportHeight() {
      var $elems = $('[data-fit-to-viewport-height]'),
          height = $window.outerHeight();

      $elems.each( function() {
          var $this = $(this),
              originalHeight = 0;

          $this.css('height', '');
          originalHeight = $this.outerHeight();

          if ( Utility.isBreakpointDown('lg') ) return;

          if ( originalHeight < height ) {
            $this.css('height', height + 'px');
          }
      } );
  }

  init();

} );
