//document.addEventListener("online", network.checkConnection, false);

$(document).ready(function() {
    $(document).bind("deviceready", function() {
        app.onDeviceReady();
    });
});

var ApiCaller;
var ContactApi;
var localLanguage;
var mainView;

var statusBarStatus = 0;

var app = {
    onDeviceReady: function() {
        navigator.splashscreen.hide();
        
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

    //WORK
    profilPage: function () {
        mainView.router.loadContent($('#profilPage').html());
        profilPage.init();
    },
    
    //WORK
    globalizationPage: function () {
        Globalization.init();
    },

    //CHECK
    googleAnalyticsPage: function() {
        GoogleAnalytics.init();
    },

    //BUG
    compassPage: function() {
        Compass.getCurrent();
    },

    //WORK
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
    },

    //WORK
    sharingPage: function () {
        mainView.router.loadContent($('#sharingPage').html());
        Sharing.init(window.plugins.socialsharing);
    },

    //TO CHECK
    networkPage: function () {
        Network.checkConnection();
    },

    //WORK EXC LOADER
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