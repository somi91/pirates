(function () {
  'use strict';

  angular
    .module('pirateTechnologies.core.models')
    .factory('Hotel', HotelFactory);

  /** @ngInject */
  function HotelFactory(HotelApi, HotelModel, HotelCollection) {
    var factory = {
      api: HotelApi(HotelApiResponseTransformer),
      model: HotelModel,
      collection: HotelCollection(HotelModel)
    };

    return factory;

    function HotelApiResponseTransformer(responseData) {
      if(!responseData) {
        return null;
      }

      if (angular.isArray(responseData)) {
        return factory.collection.build(responseData);
      } else {
        return responseData ? factory.model.build(responseData) : null;
      }
    }
  }
})();
