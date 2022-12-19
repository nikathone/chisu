/**
 * @file
 * Tooltip utilities.
 */
(function (Drupal) {

  'use strict';

  Drupal.behaviors.chisuPopover = {
    attach: function (context, settings) {
      const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
      popoverTriggerList.map((popoverTriggerEl) => {
        popoverTriggerEl.addEventListener('click', (e) => e.preventDefault());
        return new bootstrap.Popover(popoverTriggerEl);
      });
    }
  };

})(Drupal);
