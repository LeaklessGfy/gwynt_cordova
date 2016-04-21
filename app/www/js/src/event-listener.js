$(document).ready(function() {
    $(document).bind("deviceready", function() {
        app.onDeviceReady();
    });
});

var ApiCaller;
var ContactApi;
var localLanguage;
var dynamicPageIndex = 0;
var mainView;

var app = {
    onDeviceReady: function() {
        navigator.splashscreen.show();
        ApiCaller = new ApiCaller();
        //StatusBar.backgroundColorByHexString("#40A497");
        //StatusBar.hide();

        var myApp = new Framework7();
        // Export selectors engine
        var $$ = Dom7;

        mainView = myApp.addView('.view-main', {
            // Because we use fixed-through navbar we can enable dynamic navbar
            dynamicNavbar: true
        });

        $$('.create-profil').on('click', function () {
            app.profilPage();
        });

        //profilPage.init();
        //googleAnalytics.init();
        //globalization.init();
        //app.findGeoloc();
        compass.init();
    },

    setLocal: function(local) {
        localLanguage = local;
    },

    profilPage: function () {
        mainView.router.loadContent($('#profilPage').html());
        profilPage.init();
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