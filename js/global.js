/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.chisu = {
    attach: function (context, settings) {

    }
  };

  Drupal.behaviors.chisu= {
    attach: function (context, settings) {
      let myButton = jQuery('#search-expand');
      myButton.once().on('click', function () {
        jQuery('#block-exposedformsearchpage-1').toggleClass('d-block');
        myButton.toggleClass('search-block-button-expanded');
        jQuery('input#edit-search').focus();
        console.log('clicked');
      });
    }
  };

  // Drupal.behaviors.chisuMenuParentClick = {
  //   attach: function (context, settings) {
  //     //mobile part
  //     let count = 0;
  //     window.mobile = false;
  //
  //     function menuParentClick() {
  //       let selector = $("li.dropdown :first-child");
  //       window.mobile = (window.innerWidth < 1200);
  //       if (window.mobile) {
  //         if ('ontouchstart' in document.documentElement) {
  //           selector.on("touchstart", function() {
  //             //count++;
  //             if (count > 0){
  //               let $el = $(this).parent();
  //               if ($el.hasClass('show')) {
  //                 //if ($el.hasClass('menu-item--expanded')) {
  //                 let $a = $el.children('a.dropdown-toggle');
  //                 if ($a.length && $a.attr('href')) {
  //                   location.href = $a.attr('href');
  //                 }
  //               }
  //             }
  //             count++;
  //           });
  //         }
  //         else {
  //           selector.on("click", function() {
  //             //count++;
  //             if (count > 0){
  //               let $el = $(this).parent();
  //               if ($el.hasClass('show')) {
  //                 //if ($el.hasClass('menu-item--expanded')) {
  //                 let $a = $el.children('a.dropdown-toggle');
  //                 if ($a.length && $a.attr('href')) {
  //                   location.href = $a.attr('href');
  //                 }
  //               }
  //             }
  //             count++;
  //           });
  //         }
  //       } else {
  //         selector.on("click", function() {
  //           let $el = $(this).parent();
  //           if ($el.hasClass('menu-item--expanded')) {
  //             let $a = $el.children('a.dropdown-toggle');
  //             if ($a.length && $a.attr('href')) {
  //               location.href = $a.attr('href');
  //             }
  //           }
  //         });
  //       }
  //     }
  //
  //     // will be called whenever window size changes
  //     window.addEventListener('resize', function() {
  //       menuParentClick();
  //     });
  //     menuParentClick();
  //   }
  // };

})(jQuery, Drupal);
