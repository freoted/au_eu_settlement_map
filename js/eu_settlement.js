// =====================================
// Global variables
// =====================================

var map;

// Array with each unique year of settlement
var yearArray = [0, 1788,	1791,	1798,	1803,	1804,	1806,	1807,	1808,	1812,	1813,	1814,
  1818,	1820,	1821,	1823,	1824,	1825,	1826,	1827,	1829,	1830,	1831,	1832,	1833,	1834,
  1835,	1836,	1837,	1838,	1839,	1840, 1842, 1843,	1844,	1845,	1846,	1847,	1849,	1850,
  1851,	1852,	1853,	1854,	1855,	1856,	1857,	1858,	1859,	1860,	1861,	1862,	1863,	1864,
  1865,	1867,	1868,	1869,	1870,	1870,	1871,	1872,	1873,	1876,	1877,	1878,	1879,	1883,
  1882,	1884,	1885,	1886,	1887,	1888,	1890,	1891,	1892,	1893,	1896,	1904,	1911,	1913,
  1915,	1916,	1917,	1920,	1923,	1924,	1926,	1961,	1965,	1967,	1968,	1980,	1981,	1982,	1987]

// After the loop, each feature where the year is less than year selected in the slider, will be added to the array in this object
// initialise with 1788 features
var chosenYearObject = {
  "type": "FeatureCollection",
  "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  "features": [
    { "type": "Feature", "properties": { "year": 1788, "town": "Sydney", "state": "New South Wales", "approx_yr": "N" }, "geometry": { "type": "Point", "coordinates": [ 151.2092955, -33.8688197 ] } },
    { "type": "Feature", "properties": { "year": 1788, "town": "Parramatta", "state": "New South Wales", "approx_yr": "N" }, "geometry": { "type": "Point", "coordinates": [ 151.001111, -33.815 ] } },
    { "type": "Feature", "properties": { "year": 1788, "town": "Kingston", "state": "Norfolk Island", "approx_yr": "N" }, "geometry": { "type": "Point", "coordinates": [ 167.959588, -29.0563937 ] } }
  ]
};


// =====================================
// Functions
// =====================================

// For map: function to initialise the map
function initmap() {
  var stamen = new L.StamenTileLayer("watercolor");
  map = new L.Map("map", {
    center: new L.LatLng(-25.028401, 134.190508),
    zoom: 4,
    layers: stamen
  });
}

//For slider: this function updates the text value when you move the slider so year is displayed under the slider
function updateYear(year) {
  document.querySelector('#displayedYear').textContent = year;
}

function pushSelectedYears (year) {
  chosenYearObject.features = [];
  for (var i = 0; i < locationObject.features.length; i++) {
  // assigns i to a new variable feature (for convenience?)
  var feature = locationObject.features[i];
  //pushes each feature where year is less than or equal to (slider value) to a new object
  if (feature.properties.year <= year) {
    chosenYearObject.features.push(feature);
  }
  };
  return chosenYearObject;
}


// =====================================
// Calling the functions
// =====================================
initmap();

var currentMarkers = L.geoJson(chosenYearObject).addTo(map);



document.getElementById('yearSlider').addEventListener('change', function() {
  //2. remove previous layers
  map.removeLayer(currentMarkers);
  sliderIndex = this.value;
  //3. gets the year from the yearArray
  year = yearArray[sliderIndex];
  // Finds all values <= slider year and pushes them to a new object
  pushSelectedYears(year);
  // L.geoJson(chosenYearObject).addTo(map);
  currentMarkers = L.geoJson(chosenYearObject).addTo(map);


});
