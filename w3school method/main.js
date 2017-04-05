// $(function () {
function myMap() {
    var myCenter = new google.maps.LatLng(41.878114, -87.629798);
    var mapProp = {
        center: myCenter,
        zoom: 12,
        draggable: false,
        scrollwheel: false,
        mapTypeId: 'roadmap'
    };
    var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
    var marker = new google.map.Marker({ position: myCenter });
    marker.setMap(map);
}
// myMap();
// });


// $(function () {
//     var myCenter = new google.maps.LatLng(41.878114, -87.629798);
//     var mapProp = { center: myCenter, zoom: 12, scrollwheel: false, draggable: false, mapTypeId: google.maps.MapTypeId.ROADMAP };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
//     var marker = new google.maps.Marker({ position: myCenter });
//     marker.setMap(map);
// });


