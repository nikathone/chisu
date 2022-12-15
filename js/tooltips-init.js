/**
 * @file
 * Tooltip utilities.
 */
(function (Drupal) {

  'use strict';

  Drupal.behaviors.chisuTooltips = {
    attach: function (context, settings) {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }
  };

})(Drupal);
