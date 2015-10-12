(function() {
  'use strict';

  window.Map = React.createClass({
    mixins: [ReactRouter.History],

    componentDidMount: function(){
      var map = React.findDOMNode(this.refs.map);
      var mapOptions ={
        center: {lat: 37.7758, lng: -122.425},
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);
      BenchStore.addBenchChangeListener(this._createMarkers);

      this.map.addListener("idle", function(){
        var mapDimensions = this.map.getBounds();
        var southWest = mapDimensions.getSouthWest();
        var northEast = mapDimensions.getNorthEast();
        ApiUtil.fetchBenches(southWest, northEast);
      }.bind(this));

      this.map.addListener("click", function(e){
        this.history.pushState(null, "benches/new", e.latLng );
      }.bind(this));
    },

    _createMarkers: function(){
      var markers = BenchStore.all();
      var that = this;

      markers.forEach(function(marker){
        var googleMarker = new google.maps.Marker({
          position: {lat: marker.lat, lng: marker.lng},
          map: that.map,
          title: marker.description
        });
      });
    },

    render: function(){
      return (
        <div className="map" ref="map"></div>
      );
    }
  });

}());
