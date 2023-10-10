var map = L.map('map').setView([47.501848, 19.0568], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([47.501848, 19.0568]).addTo(map);

var circle = L.circle([47.501848, 19.0568], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 30  
}).addTo(map);

var polygon = L.polygon([
    [47.501848, 19.0568],
    [47.502256, 19.055014],
    [47.501848, 19.0568]
]).addTo(map);


circle.bindPopup("ide2.");
polygon.bindPopup("oda.");

var popup = L.popup()
    .setLatLng([47.501848, 19.0568])
    .setContent("Itt allsz.")
    .openOn(map);

    
    map.on('click', onMapClick);

    var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Itt álsz!!! " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);


