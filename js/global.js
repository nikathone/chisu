/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.chisu = {
    attach: function (context, settings) {
      let myButton = jQuery('#search-expand');
      myButton.on('click', function () {
        jQuery('#block-exposedformsearchpage-1').toggleClass('d-block');
        myButton.toggleClass('search-block-button-expanded');
        jQuery('input#edit-keys').focus();
        console.log('clicked');
      });
    }
  };

})(jQuery, Drupal);
