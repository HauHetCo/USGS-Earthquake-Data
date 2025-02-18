// Add console.log to check to see if our code is working.
// console.log("working");

// // Store our JSON API endpoint as queryUrl.
// let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
// // Retrieve the earthquake GeoJSON data, // // Perform a GET request to the query URL/
// // Once we get a response, send the data.features object to the createFeatures function.
// d3.json(queryUrl).then(function(data){L.geoJson(data).addTo(myMap)});

// Retrieve the earthquake GeoJSON data.
// Once we get a response, send the data.features object to the createFeatures function.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    createFeatures(data.features);
});
