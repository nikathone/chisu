/**
 * @file
 * Tooltip utilities.
 */
(function (Drupal) {

  'use strict';

  Drupal.behaviors.chisuTooltips = {
    attach: function (context, settings) {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map((tooltipTriggerEl) => {
        tooltipTriggerEl.addEventListener('click', (e) => e.preventDefault());
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  };

})(Drupal);
