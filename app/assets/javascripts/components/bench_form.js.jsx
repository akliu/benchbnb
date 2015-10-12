(function() {
  'use strict';

  window.BenchForm = React.createClass({


    getInitialState: function(){
      return {lat: "", lng: "", description: ""};
    },

    createBench: function(e){
      e.preventDefault();
      var lat = parseInt(e.currentTarget.lat.value);
      var lng = parseInt(e.currentTarget.lng.value);
      var description = e.currentTarget.description.value;
      ApiUtil.createBench(lat, lng, description);
      this.setState({lat: "", lng: "", description: ""});
    },

    render: function(){
      return (
        <form onSubmit={this.createBench}>
          <label htmlFor="lat">Bench Latitude</label>
          <input type="text" id="lat"  />

          <label htmlFor="lng">Bench Latitude</label>
          <input type="text" id="lng"  />

          <label htmlFor="description">Bench Description</label>
          <input type="text" id="description"  />

          <input type="submit" />

        </form>
      );
    }
  });

}());
