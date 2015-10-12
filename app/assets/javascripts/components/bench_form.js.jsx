(function() {
  'use strict';

  window.BenchForm = React.createClass({


    getInitialState: function(){
      // return {lat: "", lng: "", description: "", seats: ""};
      return {lat: this.props.location.query.J, lng: this.props.location.query.M,
                description: "", seats: ""};
    },

    createBench: function(e){
      e.preventDefault();
      var lat = Number(e.currentTarget.lat.value);
      var lng = Number(e.currentTarget.lng.value);
      var seating = parseInt(e.currentTarget.seats.value);
      var description = e.currentTarget.description.value;
      ApiUtil.createBench(lat, lng, description, seating);
      this.props.history.pushState(null, "/");
    },

    render: function(){
      return (
        <form onSubmit={this.createBench}>
          <label htmlFor="lat">Bench Latitude</label>
          <input type="text" id="lat" defaultValue={this.state.lat}  />

          <label htmlFor="lng">Bench Longitude</label>
          <input type="text" id="lng" defaultValue={this.state.lng} />

          <label htmlFor="seats">Bench Seats</label>
          <input type="text" id="seats"  />

          <label htmlFor="description">Bench Description</label>
          <input type="text" id="description"  />

          <input type="submit" />

        </form>
      );
    }
  });

}());
