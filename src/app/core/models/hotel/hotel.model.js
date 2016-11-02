(function () {
  'use strict';

  angular
    .module('pirateTechnologies.core.models')
    .factory('HotelModel', HotelModelFactory);

  /** @ngInject */
  function HotelModelFactory(_, Review) {

    ////////////////////
    // Static methods //
    ////////////////////

    _.extend(HotelModel, {
      build: buildHotel
    });

    //////////////////////
    // Instance methods //
    //////////////////////

    _.extend(HotelModel.prototype, {
      getReviews: getReviews,
      addReviews: addReviews
    });

    return HotelModel;

    //////////////////////////////////
    // Static Methods Implementation //
    //////////////////////////////////

    function HotelModel(attrs) {
      _.extend(this, attrs);
    }

    function buildHotel(data) {
      return new HotelModel(data);
    }

    /////////////////////////////////////
    // Instance Methods Implementation //
    /////////////////////////////////////

    function getReviews() {
      var that = this;
      return Review.api
        .getAll(this.id)
        .then(function(reviews) {
          that.addReviews(reviews);
          return reviews;
        });
    }
    function addReviews(reviews) {
      this.reviews = new Review.collection(reviews);
    }
  }

})();
