document.addEventListener("online", network.checkConnection, false);

$(document).ready(function() {
    $(document).bind("deviceready", function() {
        app.onDeviceReady();
    });
});

var ApiCaller;
var ContactApi;
var localLanguage;

var app = {
    onDeviceReady: function(){
        //StatusBar.backgroundColorByHexString("#40A497");
        StatusBar.hide();

        navigator.splashscreen.show();
        ApiCaller = new ApiCaller();
        profilPage.init();
        //googleAnalytics.init();
        //globalization.init();
        //app.findGeoloc();
        compass.init();
    },

    setLocal: function(local) {
        localLanguage = local;
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