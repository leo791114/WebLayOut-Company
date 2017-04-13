$(function () {
    myMap();
    smoothScrolling();
    slideEffect();
});

function myMap() {
    var myCenter = new google.maps.LatLng(41.878114, -87.629798);
    var mapProp = {
        center: myCenter,
        zoom: 12,
        draggable: false,
        scrollwheel: false,
        mapTypeId: 'roadmap'
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter
    });
    marker.setMap(map);
}

function smoothScrolling() {
    $('.navbar a, footer a, navbar-header a').on('click', function () {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                window.location.hash = hash;
            });
        }
    });
}

function slideEffect() {
    $(window).scroll(function () {
        $('.slideanim').each(function () {
            var position = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if (position < winTop + 600) {
                $(this).addClass('slide');
            }
        });
    });
}