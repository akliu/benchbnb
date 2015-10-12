(function() {
  'use strict';

  window.ApiUtil = {

    fetchBenches: function(southWest, northEast) {
      var south = southWest.lat();
      var west = southWest.lng();
      var north = northEast.lat();
      var east = northEast.lng();

      // debugger
      $.ajax({
        url: "api/benches",
        method: "GET",
        data: {south, west, north, east},
        success: function(benches){
          ApiActions.receiveBenches(benches);
        }
      });
    },

    createBench: function(lat, lng, description, seats) {
      $.ajax({
        url: "api/benches",
        method: "POST",
        data: {bench: {description, lat, lng, seats}},
        success: function(benches){
          ApiActions.receiveBenches(benches);
        }
      });
    }
  };
}());
