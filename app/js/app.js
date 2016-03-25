/**
 * INSPINIA - Responsive Admin Theme
 *
 */
(function () {
    angular.module('inspinia', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                       // Idle timer
        'ngSanitize',                   // ngSanitize
        'ngMaterial',					// ng Material
        'checkboxDemo1',
        'calculatorApp',
        'calculatorModule'
    ])
})();

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad