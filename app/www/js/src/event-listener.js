//document.addEventListener("online", network.checkConnection, false);

$(document).ready(function() {
    $(document).bind("deviceready", function() {
        app.onDeviceReady();
    });
});

var ApiCaller;
var localLanguage;
var mainView;

var statusBarStatus = 0;

var app = {
    onDeviceReady: function() {
        ApiCaller = new ApiCaller();

        var myApp = new Framework7();
        //var $$ = Dom7;

        mainView = myApp.addView('.view-main', {
            dynamicNavbar: true
        });

        app.eventListener();
        app.checkLocalStorage();
    },

    eventListener: function () {
        $('.page-play').on('click', function () {
           app.playPage();
        });

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

        $('.page-sharing').on('click', function () {
           app.sharingPage();
        });

        $('.page-network').on('click', function () {
           app.networkPage();
        });

        $('.page-geoloc').on('click', function () {
            app.geolocPage();
        });
    },

    checkLocalStorage: function () {
        if(localStorage != undefined) {
        } else {
            alert("No local");
        }
    },

    playPage: function () {
        mainView.router.loadContent($('#playPage').html());
        playPage.init();
    },

    profilPage: function () {
        mainView.router.loadContent($('#profilPage').html());
        profilPage.init();
    },

    globalizationPage: function () {
        Globalization.init();
    },

    googleAnalyticsPage: function() {
        GoogleAnalytics.init();
    },

    compassPage: function() {
        Compass.getCurrent();
    },

    statusBarPage: function () {
        if(statusBarStatus == 0) {
            StatusBar.backgroundColorByHexString("#40A497");
            StatusBar.show();

            statusBarStatus = 1;
        } else {
            StatusBar.hide();

            statusBarStatus = 0;
        }

    },
    
    //ADD INTERVAL
    splashScreenPage: function () {
        navigator.splashscreen.show();

        setTimeout(navigator.splashscreen.hide,2000);
    },

    sharingPage: function () {
        mainView.router.loadContent($('#sharingPage').html());
        Sharing.init();
    },

    networkPage: function () {
        Network.checkConnection();
    },

    geolocPage: function(){
        Loader.start();

        var onSuccess = function(position) {
            Loader.stop();

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
            Loader.stop();

            alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
};