//document.addEventListener("online", network.checkConnection, false);

$(document).ready(function() {
    $(document).bind("deviceready", function() {
        app.onDeviceReady();
    });
});

var localLanguage;
var mainView;

var app = {
    onDeviceReady: function() {
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

        $('.page-fight').on('click', function () {
            app.fightPage($(this).data('id'));
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

    fightPage: function (id){
        alert(id);
        mainView.router.loadContent($('#fightPage').html());
        fightPage.init(id);
    },

    profilPage: function () {
        mainView.router.loadContent($('#profilPage').html());
        profilPage.init();
    },

    globalizationPage: function () {
        GlobalizationApi.getCurrentLocal();
    },

    googleAnalyticsPage: function() {
        GoogleAnalyticsApi.init();
    },

    compassPage: function() {
        CompassApi.getCurrent();
    },

    statusBarPage: function () {
        StatusBarApi.init();
    },
    
    splashScreenPage: function () {
        navigator.splashscreen.show();
        setTimeout(navigator.splashscreen.hide,2000);
    },

    sharingPage: function () {
        mainView.router.loadContent($('#sharingPage').html());
        SharingApi.init();
    },

    networkPage: function () {
        NetworkApi.checkConnection();
    },

    geolocPage: function(){
        GeolocApi.getLocalisation();
    }
};