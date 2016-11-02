(function () {
  'use strict';

  angular
    .module('pirateTechnologies.core.models')
    .factory('ReviewApi', ReviewApiFactoryWrapper);

  /** @ngInject */
  function ReviewApiFactoryWrapper($http, config, UrlReplacer, ApiHelpers) {
    return ReviewApiFactory;

    function ReviewApiFactory(apiResponseTransformer) {
      return {
        getAll: getAll
      };

      function getAll(hotelId) {
        var url = config.api.concat('/reviews');
        // var realUrl = UrlReplacer.replaceParams(url, {
        //   id: hotelId
        // });
        var realUrl = url + UrlReplacer.addQueryData([{'hotel_id': hotelId}]);

        return $http
          .get(realUrl)
          .then(ApiHelpers.extractData, ApiHelpers.handleError)
          .then(apiResponseTransformer);
      }

    }
  }
})();
