(function () {
  'use strict';

  angular
    .module('pirateTechnologies.core.models')
    .factory('ReviewCollection', ReviewCollectionFactoryWrapper);

  /** @ngInject */
  function ReviewCollectionFactoryWrapper(_) {
    return ReviewCollectionFactory;

    function ReviewCollectionFactory(model) {
      var ReviewClass = model;

      ////////////////////
      // Static methods //
      ////////////////////

      _.extend(ReviewCollection, {
        build: buildReviewCollection
      });

      //////////////////////
      // Instance methods //
      //////////////////////

      _.extend(ReviewCollection.prototype, {
        getNext: getNext
      });

      return ReviewCollection;

      //////////////////////////////////
      // Static Methods Implementation //
      //////////////////////////////////

      function ReviewCollection(attrs) {
        _.extend(this, _.map(attrs, ReviewClass.build).filter(Boolean));
        // this.data = _.map(this.data, ReviewClass.build).filter(Boolean);
      }

      function buildReviewCollection(data) {
        return new ReviewCollection(data);
      }

      /////////////////////////////////////
      // Instance Methods Implementation //
      /////////////////////////////////////

      function getNext() {

      }
    }

  }

})();
