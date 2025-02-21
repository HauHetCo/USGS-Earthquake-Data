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

// Create layer for tectonic plates
tectonicPlates = new L.layerGroup();

// Perform a GET request to the tectonicplatesURL
d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json").then(function (plates) {

        // Console log the data retrieved 
        console.log(plates);
        L.geoJSON(plates, {color: "orange",weight: 2}).addTo(tectonicPlates);
});

// CREATING FEATURES FUNCTIONS
function createFeatures(earthquakeData) {

    // Define a function that we want to run once for each feature in the features array.
    // Give each feature a popup that describes the place and time of the earthquake.
    function onEachFeature(feature, layer) {
        layer.bindPopup(`<h3>${"Magnitude: "}${feature.properties.mag}${" Richter"}<p>
		                     ${"Location: "}${feature.properties.place}</p></h3><hr><p>
						    ${"Date & Time: "}${new Date(feature.properties.time)}</p>
					         <b>${"Type: "}${feature.properties.type}<br></b><hr>
						 <b>${"Status: "}${feature.properties.status}<br></b><hr>
						 <b>${"Tsunami: "}${feature.properties.tsunami}<br></b><hr>
						 
					         <b>${"USGS Powered By HauHet plc. v1.0.0  "}<br></b><hr>
						 
		                     <b><a href='${feature.properties.url}' target="_blank" >Data Details</a>.</b>  `);
    
  }
	
     // // Create a GeoJSON layer that contains the features array on the earthquakeData object.
    // // Run the onEachFeature function once for each piece of data in the array.
    // let earthquakes = L.geoJSON(earthquakeData, {onEachFeature: onEachFeature});
