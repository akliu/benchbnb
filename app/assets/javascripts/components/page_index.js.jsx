(function() {
  'use strict';

  window.Index = React.createClass({
    getInitialState: function(){
      return {benches: BenchStore.all()};
    },

    componentWillMount: function(){
      BenchStore.addBenchChangeListener(this._benchesChanged);
      ApiUtil.fetchBenches();
    },

    _benchesChanged: function(){
      this.setState({benches: BenchStore.all()});
    },

    render: function(){
      return(
        <ul>
          {
            this.state.benches.map(function(bench){
              return <li key={bench.id}>{bench.description} | Lat:
                          {bench.lat} | Lng:
                          {bench.lng}</li>;
            })
          }
        </ul>
      );
    }
  });
}());
