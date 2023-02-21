/**
 * @file
 * Global utilities.
 *
 */
(function (Drupal, once) {

  'use strict';

  Drupal.behaviors.chisu = {
    attach: function (context) {
      once('search-button-init', '#search-expand', context).forEach(function (element) {
        let myButton = document.getElementById('search-expand');
        // Add event listener to the button detecting clicks.
        myButton.addEventListener('click', function () {
          document.getElementById('block-exposedformsearchpage-1').classList.toggle('d-block');
          myButton.classList.toggle('search-block-button-expanded');
          document.getElementById('CollapsingNavbar').querySelector('input[type=text]').focus();
          console.log('clicked');
        });
      });
    }
  };

})(Drupal, once);
