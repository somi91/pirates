(function () {
  angular
    .module('pirateTechnologies.core')
    .service('UrlReplacer', UrlReplacer);

  /** @ngInject */
  function UrlReplacer(_) {
    var placeholderSymbol = ':';

    return {
      setPlaceholderSymbol: setPlaceholderSymbol,
      replaceParams: replaceParams,
      addQueryData: addQueryData
    }

    function setPlaceholderSymbol(symbol) {
      placeholderSymbol = symbol;
    }

    function replaceParams(url, data){
      var joinedKeys = _.map(_.keys(data), function(key) {
        return placeholderSymbol + key;
      }).join('|');
      var re = new RegExp(joinedKeys, 'gi');

      return url.replace(re, function(matched){
        return data[matched.replace(placeholderSymbol, '')];
      });
    }

    // function accepts array of objects and build get query
    function addQueryData(data) {
      var query = "?";
      var n = data.length;
      for (var i = n - 1; i >= 0; i--) {
        var item = data[i];
        if(item) {
          _.each( item, function( val, key ) {
            if ( val ) {
              if(i != n-1) {
                query = query + "&";
              }
              query = query + key + "=" + val;
            }
          });
        }
      }
      return query;
    }

  }
})();
