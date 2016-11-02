angular
  .module('pirateTechnologies.config', [])
  .constant('config', {
    "api":"http://fake-hotel-api.herokuapp.com/api",
    "domain":"http://lorempixel.com/640/480/city",
    "type":"user",
    "appName":"pirateTechnologies",
    "dateFormat":"MM/DD/YYYY",
    "timeFormat":"HH:mm:ss",
    "dateTimeFormat":"MM/DD/YYYY HH:mm:ss"
    });
