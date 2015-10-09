(function() {
  'use strict';

  window.ApiUtil = {
    fetchBenches: function(){
      $.getJSON("api/benches", function(benches){
        ApiActions.receiveBenches(benches);
      });
    }
  };
}());
