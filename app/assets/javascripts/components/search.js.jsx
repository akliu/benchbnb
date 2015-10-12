(function() {
  'use strict';

  window.Search = React.createClass({
    getInitialState: function(){
      return {params: FilterStore.all()};
    },

    componentDidMount: function(){
      FilterStore.addFilterChangeListener(this._changeFilter);
    },

    _changeFilter: function(){
      this.setState({params: FilterStore.all()});
      // ApiUtil.fetchBenches(params.south, params.west, params.north, params.east);
    },

    componentDidUpdate: function(){
  
      ApiUtil.fetchBenches(this.state.params.south, this.state.params.west,
                            this.state.params.north, this.state.params.east);
    },

    render: function(){
      return (
        <div>
          <Map />
          <Index />
        </div>
      );
    }
  });

}());
