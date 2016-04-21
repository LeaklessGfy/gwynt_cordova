document.addEventListener("online", network.checkConnection, false);

$(document).ready(function() {
    $(document).bind("deviceready", function() {
        app.onDeviceReady();
    });
});

var ApiCaller;
var ContactApi;
var localLanguage;
var mainView;

var app = {
    onDeviceReady: function() {
        ApiCaller = new ApiCaller();
        ContactApi = new ContactApi();

        var myApp = new Framework7();
        //var $$ = Dom7;

        mainView = myApp.addView('.view-main', {
            dynamicNavbar: true
        });

        app.eventListener();
    },

    eventListener: function () {
        $('.page-profil').on('click', function () {
            app.profilPage();
        });

        $('.page-globalization').on('click', function () {
            app.globalizationPage();
        });

        $('.page-google-analytics').on('click', function() {
            app.googleAnalyticsPage();
        });

        $('.page-compass').on('click', function () {
           app.compassPage();
        });

        $('.page-status-bar').on('click', function () {
           app.statusBarPage();
        });

        $('.page-splash-screen').on('click', function () {
            app.splashScreenPage();
        });

        $('.page-geoloc').on('click', function () {
            app.geolocPage();
        });
    },

    profilPage: function () {
        mainView.router.loadContent($('#profilPage').html());
        profilPage.init();
    },
    
    globalizationPage: function () {
        globalization.init();
    },

    googleAnalyticsPage: function() {
        googleAnalytics.init();
    },

    compassPage: function() {
        compass.init();
    },

    statusBarPage: function () {
        StatusBar.backgroundColorByHexString("#40A497");
    },

    splashScreenPage: function () {
        navigator.splashscreen.hide();
    },

    geolocPage: function(){
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