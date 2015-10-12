(function(root) {
  'use strict';

  var _filter = {minSeat: "", maxSeat: "", north: "", south: "", east: "", west: ""};
  var FILTER_CHANGE_EVENT = "filterChangeEvent";

  var resetParams = function(params){
    debugger
     _filter.north = params.north;
     _filter.south = params.south;
     _filter.west = params.west;
     _filter.east = params.east;
  };

  root.FilterStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return $.extend(true, {}, _filter);
    },

    addFilterChangeListener: function(cb){
      this.on(FILTER_CHANGE_EVENT, cb);
    },

    removeFilterChangeListener: function(cb){
      this.removeListener(FILTER_CHANGE_EVENT, cb);
    },

    dispatchID: AppDispatcher.register(function(action){
      switch(action.actionType){
        case FilterConstants.UPDATE_FILTER:
          resetParams(action.payload);
          FilterStore.emit(FILTER_CHANGE_EVENT);
          break;
      }
    })
  });
}(this));
