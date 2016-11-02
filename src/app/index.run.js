(function() {
  'use strict';

  angular
    .module('pirateTechnologies')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, amMoment) {

    $log.debug('runBlock end');

    amMoment.changeLocale('de');
  }

})();
