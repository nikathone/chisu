/**
 * @file
 * Tooltip utilities.
 */
(function (Drupal) {

  'use strict';

  Drupal.behaviors.chisuTooltips = {
    attach: function (context, settings) {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  };

})(Drupal);
