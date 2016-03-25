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
    .filter('rishi', function(){
         // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally
  return function(input) {
  var dateObj = new Date();
    var currTime = dateObj.getTime();
    var diff= currTime-input;    
    return (diff);

  }
    })
})();

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad