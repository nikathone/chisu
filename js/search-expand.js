/**
 * @file
 * Search expand utilities.
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.chisuSearchExpand = {
    attach: function (context, settings) {
      let myButton = $('#search-expand');
      myButton.once().on('click', function () {
        $('#block-exposedformsearchpage-1').toggleClass('d-block');
        myButton.toggleClass('search-block-button-expanded');
        $('input#edit-search').focus();
      });
    }
  };

})(jQuery, Drupal);
