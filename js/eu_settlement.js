// universal variables

// function to initialise the map
function initmap() {

  var stamen = new L.StamenTileLayer("watercolor");
  var map = new L.Map("map", {
    center: new L.LatLng(-25.028401, 134.190508),
    zoom: 4,
    layers: stamen
});

}

initmap();
