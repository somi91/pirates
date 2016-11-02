(function () {
  'use strict';

  angular
    .module('pirateTechnologies.core.models')
    .factory('HotelCollection', HotelCollectionFactoryWrapper);

  /** @ngInject */
  function HotelCollectionFactoryWrapper(_) {
    return HotelCollectionFactory;

    function HotelCollectionFactory(model) {
      var HotelClass = model;

      ////////////////////
      // Static methods //
      ////////////////////

      _.extend(HotelCollection, {
        build: buildHotelCollection
      });

      //////////////////////
      // Instance methods //
      //////////////////////

      _.extend(HotelCollection.prototype, {
        getNext: getNext
      });

      return HotelCollection;

      //////////////////////////////////
      // Static Methods Implementation //
      //////////////////////////////////

      function HotelCollection(attrs) {
        _.extend(this, _.map(attrs, HotelClass.build).filter(Boolean));
        // this.data = _.map(attrs, HotelClass.build).filter(Boolean);
      }

      function buildHotelCollection(data) {
        return new HotelCollection(data);
      }

      /////////////////////////////////////
      // Instance Methods Implementation //
      /////////////////////////////////////

      function getNext() {

      }
    }

  }

})();
