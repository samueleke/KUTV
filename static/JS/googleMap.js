
function initMap() {
    const fsega = { lat: 46.77338, lng: 23.62143 }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: fsega,
        
    });
   

    const marker = new google.maps.Marker({
        position: fsega,
        map: map,
        url: 'https://www.google.com/maps/place/BBTE+K%C3%B6zgazdas%C3%A1g-+%C3%A9s+Gazd%C3%A1lkod%C3%A1studom%C3%A1nyi+Kar/@46.7731747,23.6192053,17z/data=!3m1!4b1!4m5!3m4!1s0x47490c15a18e8af9:0xcc357d4dedcf12a0!8m2!3d46.7731747!4d23.621394'
    });

     marker.setMap(map);
}


// google.maps.event.addDomListener(window, "load", initMap);
// google.maps.event.addListener(marker, "click", function () {
//     window.location.href = marker.url;
// });
window.initMap = initMap;
