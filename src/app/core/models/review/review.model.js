(function () {
  'use strict';

  angular
    .module('pirateTechnologies.core.models')
    .factory('ReviewModel', ReviewModelFactory);

  /** @ngInject */
  function ReviewModelFactory(_) {

    ////////////////////
    // Static methods //
    ////////////////////

    _.extend(ReviewModel, {
      build: buildReview
    });

    //////////////////////
    // Instance methods //
    //////////////////////

    _.extend(ReviewModel.prototype, {});

    return ReviewModel;

    //////////////////////////////////
    // Static Methods Implementation //
    //////////////////////////////////

    function ReviewModel(attrs) {
      _.extend(this, attrs);
    }

    function buildReview(data) {
      return new ReviewModel(data);
    }

    /////////////////////////////////////
    // Instance Methods Implementation //
    /////////////////////////////////////

  }

})();
