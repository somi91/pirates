(function () {
  'use strict';

  angular
    .module('pirateTechnologies.core.models')
    .factory('Review', ReviewFactory);

  /** @ngInject */
  function ReviewFactory(ReviewApi, ReviewModel, ReviewCollection) {
    var factory = {
      api: ReviewApi(ReviewApiResponseTransformer),
      model: ReviewModel,
      collection: ReviewCollection(ReviewModel)
    };

    return factory;

    function ReviewApiResponseTransformer(responseData) {
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
