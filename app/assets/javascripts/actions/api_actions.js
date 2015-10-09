(function() {
  'use strict';

  window.ApiActions = {
    receiveBenches: function(benches){
      AppDispatcher.dispatch({
        actionType: BenchConstants.BENCHES_FETCHED,
        payload: benches
      });
    }

  };

}());
