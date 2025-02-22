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

    //This function determines the radius of the earthquake marker based on its magnitude.
    // Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
    function getRadius(magnitude) { return magnitude * 4 }

    // CHanging marker to Circle marker, size depends on magnitude & color depends on depth 
     let earthquakes = L.geoJSON(earthquakeData, {
        pointToLayer: function(feature, latlng) {
            return new L.CircleMarker(latlng, {
                opacity: 1,
                fillOpacity: 0.7,
                fillColor: getColor(feature.geometry.coordinates[2]),
                radius: getRadius(feature.properties.mag),
                color: "black",
                stroke: true,
                weight: 0.5
            });
        },
        onEachFeature: onEachFeature
    });

 
    // Send our earthquakes layer to the createMap function/
    createMap(earthquakes);
}


// Creating Color palette based on depth & creating the legend
// This function determines the color of the circle based on the depth of the earthquake.
function getColor(depth) {
    if (depth < 10) { return "#387D38" }
    if (depth < 30) { return "#d4ee00" }
    if (depth < 50) { return "#eecc00" }
    if (depth < 70) { return "#ee9c00" }
    if (depth < 90) { return "#ea822c" }
    return "#FF0000";

}

// Create a legend control object.
let legend = L.control({ position: "bottomright" });

// Define function when legend is added
legend.onAdd = function() {
    let div = L.DomUtil.create("div", "info legend");
    let depth = [-10, 10, 30, 50, 70, 90];
        div.innerHTML += "<h3 style='text-align: center'>Depth</h3>"
    
    // Loop through depth, and create a new legend object
    for (let i = 0; i < depth.length; i++) {
        div.innerHTML += '<i style="background:' + getColor(depth[i] + 1) + '"></i> ' + depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
    }
        return div;
};

