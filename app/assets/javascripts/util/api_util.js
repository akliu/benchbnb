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
    }
  };
}());


    // fetchBenches: function(){
    //   // $.getJSON("api/benches", function(benches){
    //   //   ApiActions.receiveBenches(benches);
    //   // });
