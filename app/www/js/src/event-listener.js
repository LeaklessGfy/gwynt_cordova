$(document).ready(function() {
    $(document).bind("deviceready", function() {
        app.onDeviceReady();
    });
});

var user = {
    id: 1,
    login: null
};

var mainView;

var app = {
    onDeviceReady: function() {
        var myApp = new Framework7();

        mainView = myApp.addView('.view-main', {
            dynamicNavbar: true
        });

        app.eventListener();
        app.checkLocalStorage();
    },

    eventListener: function () {
        var body = $('#main-content');

        body.on('click', '.page-play',  function () {
           app.playPage();
        });

        body.on('click', '.page-profil', function () {
            app.profilPage();
        });

        body.on('click', '.page-globalization', function () {
            app.globalizationPage();
        });
        
        body.on('click', '.page-google-analytics', function() {
            app.googleAnalyticsPage();
        });

        body.on('click', '.page-compass', function () {
           app.compassPage();
        });

        body.on('click', '.page-status-bar', function () {
           app.statusBarPage();
        });

        body.on('click', '.page-splash-screen', function () {
            app.splashScreenPage();
        });

        body.on('click', '.page-sharing', function () {
           app.sharingPage();
        });

        body.on('click', '.page-network', function () {
           app.networkPage();
        });

        body.on('click', '.page-geoloc', function () {
            app.geolocPage();
        });
    },

    checkLocalStorage: function () {
        if(localStorage != undefined) {
            //user.id = localStorage.getItem('id');
            user.login = localStorage.getItem('login');
        } else {
            alert("No local");
        }
    },

    playPage: function () {
        mainView.router.loadContent($('#playPage').html());
        playPage.init();
    },

    fightPage: function (id){
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