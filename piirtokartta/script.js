const map = L.map("mapid").setView([60.63054533927743, 24.859280434957828], 13); //initialize the map
const btn = document.getElementById("btn"); //get the button
let coordinates = []; //array to store chosen coordinates
let polyline = null; //initialize polyline layer

//add OpenStreetMap tile layer to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Map data &copy; OpenStreetMap contributors",
  maxZoom: 18,
}).addTo(map);

// add event listener to the button
btn.addEventListener("click", function () {
  //set the boundaries of the area
  const bounds = L.latLngBounds([[60.68541808215978, 25.060850668330268], [60.569301, 24.671393015452058]]);

  //generate a random point within the boundaries
  const lat = Math.random() * (bounds._northEast.lat - bounds._southWest.lat) + bounds._southWest.lat;
  const lng = Math.random() * (bounds._northEast.lng - bounds._southWest.lng) + bounds._southWest.lng;

  //add the point to the array of coordinates and update polyline
  coordinates.push([lat, lng]);
  polyline ? map.removeLayer(polyline) : null;
  polyline = L.polyline(coordinates, { color: "red" }).addTo(map);
});