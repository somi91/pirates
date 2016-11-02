(function () {
  'use strict';

  angular
    .module('pirateTechnologies.core.models')
    .factory('HotelApi', HotelApiFactoryWrapper);

  /** @ngInject */
  function HotelApiFactoryWrapper($http, config, UrlReplacer, ApiHelpers) {
    return HotelApiFactory;

    function HotelApiFactory(apiResponseTransformer) {
      return {
        getAll: getAll,
        updateHotel: updateHotel
      };

      function getAll(params) {
        var url = config.api.concat('/hotels');
        // var url = config.api.concat('/hotels?force_error=1');

        var params = {};
        params.count = 5;

        return $http
          .get(url, {
            params: params
          })
          .then(ApiHelpers.extractData, ApiHelpers.handleError)
          .then(apiResponseTransformer);
      }

      function updateHotel(hotelId, hotel) {
        var realUrl = UrlReplacer.replaceParams(url, {
          id: hotelId
        });

        return $http
          .put(realUrl, hotel)
          .then(ApiHelpers.extractData);
      }

    }
  }
})();
