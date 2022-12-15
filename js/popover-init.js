/**
 * @file
 * Tooltip utilities.
 */
(function (Drupal) {

  'use strict';

  Drupal.behaviors.chisuPopover = {
    attach: function (context, settings) {
      const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
      popoverTriggerList.map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
    }
  };

})(Drupal);
