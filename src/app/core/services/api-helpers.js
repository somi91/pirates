(function () {
  angular
    .module('pirateTechnologies.core')
    .service('ApiHelpers', ApiHelpers);

  /** @ngInject */
  function ApiHelpers($log) {
    return {
      extractData: extractData,
      handleError: handleError
    };

    function extractData(response) {
      if(response && response.data && response.status) {
        return response.data;
      } else {
        return response;
      }
    }

    function handleError(error) {
      $log.info("handle error", error);
      return error;
    }

  }
})();
