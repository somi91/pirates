(function() {
  'use strict';

  angular
    .module('pirateTechnologies')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, Hotel, Review, config, moment) {
    var vm = this;
    vm.getHotels = getHotels;
    vm.showReviews = showReviews;

    activate();

    function activate() {
      vm.error = {
        value: false,
        message: ''
      };
    }

    function getimagePath() {
      return config.domain + "?" + 1421;
    }

    function getHotels() {
      Hotel
        .api
        .getAll()
        .then(function(response) {
          $log.info("bla bla", response);
          if(response && response.data && response.data.error) {
            vm.error = {
              value: true,
              message: response.data.error
            };
          } else {
            activate();
            vm.hotels = response;
          }
        });
    }

    function showReviews(hotel) {
      if(hotel.showReviews != true) {
        // Review
        //   .api
        //   .getAll(hotel.id)
        //   .then(function(response) {
        //     $log.info("Reviews", response);
        //     hotel.reviews = response;
        //     hotel.showReviews = true;
        //   });
        hotel
          .getReviews()
          .then(function(response) {
            $log.info("Reviews", response);
            hotel.showReviews = true;
          });
      } else {
        hotel.showReviews = false;
      }
    }

  }
})();
