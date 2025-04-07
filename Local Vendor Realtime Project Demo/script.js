// document.addEventListener('DOMContentLoaded', function() {
//     setTimeout(function() {
//       const delayedContentDiv = document.getElementById('form');
//       delayedContentDiv.style.display = 'block'; // Or 'inline', 'flex', etc., as needed
//     }, 5000);
//   });

var map = L.map('map').setView([18.4909824,73.80992], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);




function geoLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((showPosition));
    }
    else {
        alert("Your browser is not supported to map");
    }

}

// if (navigator.geolocation) {
//         // navigator.geolocation.getCurrentPosition((showPosition));
//         setInterval(()=>{
//             navigator.geolocation.getCurrentPosition((showPosition));
//         },5000);
//     }
//     else {
//         alert("Your browser is not supported to map");
//     }


var marker;

function showPosition(val) {

    // var marker;
    var lat;
    var long;
    var acc;
    // var featureGroup;

    lat = val.coords.latitude;
    long = val.coords.longitude;
    acc = val.coords.accuracy;

    var circle = L.circle([lat, long], { radius: 50 });

    marker = L.marker([lat, long])
    var featureGroup = L.featureGroup([marker]).addTo(map)
    L.featureGroup([circle]).addTo(map)
    map.fitBounds(featureGroup.getBounds())


    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();




    var greenIcon = L.icon({
        iconUrl: 'avatar-1.png',
        shadowUrl: 'avatar-1.png',

        iconSize: [38, 95], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    L.marker([lat, long], { icon: greenIcon }).addTo(map);


}








  function close(){
    let close = document.getElementById('form');
    close.style.display = "none";
  }

function menuBar(){
    let list = document.getElementById('menu-bar');
    list.style.marginRight = "32%";
    list.style.transition = "0.5s ease";
}

function closeMenu(){
    let list = document.getElementById('menu-bar');
    list.style.marginRight = "-55px";
    list.style.transition = "0.5s ease";
}
function contactForm(){
    let view = document.getElementById('form');
    view.style.display = "block";
    view.style.transition = "0.5s ease-in";
}