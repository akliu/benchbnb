(function(root) {
  'use strict';

  var _benches = [];
  var BENCH_CHANGE_EVENT = 'benchChangeEvent';

  var resetBenches = function(benches){
    _benches = benches;
  };

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function(){
      return _benches.slice();
    },

    addBenchChangeListener: function(cb){
      this.on(BENCH_CHANGE_EVENT, cb);
    },

    removeBenchChangeListener: function(cb){
      this.removeListener(BENCH_CHANGE_EVENT, cb);
    },

    dispatchID: AppDispatcher.register(function(action){
      switch(action.actionType){
        case BenchConstants.BENCHES_FETCHED:
          resetBenches(action.payload);
          BenchStore.emit(BENCH_CHANGE_EVENT);
          break;
      }
    })
  });

}(this));
