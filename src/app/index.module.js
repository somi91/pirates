(function() {
  'use strict';

  angular
    .module('pirateTechnologies', [
      //////////
      // Libs //
      //////////
      'ngAnimate',
      'ngCookies',
      'ngTouch',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'ui.router',
      'ui.bootstrap',
      'toastr',
      'angularMoment',

      //////////
      // Core //
      //////////
      'pirateTechnologies.config',
      'pirateTechnologies.core',
      'pirateTechnologies.core.models'

      //////////////
      // Features //
      //////////////


    ]);

})();
