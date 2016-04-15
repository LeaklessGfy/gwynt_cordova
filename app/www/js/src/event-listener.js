$(document).ready(function() {
    $(document).bind("deviceready", function() {
        app.onDeviceReady();
    });
});

var ApiCaller = new ApiCaller();
var ContactApi = new ContactApi();

var app = {
    onDeviceReady: function() {
        camera.init();
        googleAnalytics.init();
        app.setMenu();
    },

    setMenu: function () {
        var profilState = false;
        var $btn = $('.btn');
        $btn.on('click', function(){
            var $this = $(this);
            $('.sub-menu').css({opacity:0, height:0});
            $this.find('.sub-menu').css({opacity:1, height:"auto"})
        });
    },

    findGeoloc: function(){
        var onSuccess = function(position) {
            alert('Latitude: '          + position.coords.latitude          + '\n' +
                'Longitude: '         + position.coords.longitude         + '\n' +
                'Altitude: '          + position.coords.altitude          + '\n' +
                'Accuracy: '          + position.coords.accuracy          + '\n' +
                'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                'Heading: '           + position.coords.heading           + '\n' +
                'Speed: '             + position.coords.speed             + '\n' +
                'Timestamp: '         + position.timestamp                + '\n');
        };

        function onError(error) {
            alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
};