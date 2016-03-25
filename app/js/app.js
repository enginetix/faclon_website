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
  
    var diff = Math.round((Date.now()-input)/1000);
    if(diff <=60)
      {
        return ('less than a minute ago');
      }
    if(diff >60 && diff<=3600)
      {
        return (Math.round(diff/60) + ' minutes ago');
      }
    if(diff >3600 && diff<=86400)
      {
        return (Math.floor(diff/3660) + ' hours ago');
      }
    else
      {
        var a=input;
        var theDate = new Date(parseInt(input));
        
        dateString = theDate.toDateString();
        dateTime = theDate.toTimeString();
        return (dateString + ' at ' + dateTime);
      }
  }
    })
})();

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad