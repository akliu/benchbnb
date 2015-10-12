(function() {
  'use strict';

  window.FilterActions = {
    updateFilter: function(params){
      AppDispatcher.dispatch({
        actionType: FilterConstants.UPDATE_FILTER,
        payload: params
      });
    }
  };

}());
