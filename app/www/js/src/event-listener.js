document.addEventListener("online", network.checkConnection, false);

$(document).ready(function() {
    $(document).bind("deviceready", function() {
        navigator.splashscreen.show();
        app.onDeviceReady();
    });
});

var ApiCaller;
var ContactApi;
var localLanguage;
var mainView;

var app = {
    onDeviceReady: function() {
        navigator.splashscreen.hide();

        if(localStorage != undefined)
        {
           alert("Local Storage is supported");
            var value = localStorage.getItem("pseudo");
            $('#pseudo-c').text(value);
            var valueBg = localStorage.getItem("bg");
            $('#main-content').addClass("bg"+valueBg);
        }
        else
        {
            alert("No support");
        }

        $('#btn-pseudo').click(function(){
            var inputPseudo = $('#pseudo-form').val();
            if(inputPseudo != ''){
                localStorage.setItem("pseudo", inputPseudo);
                $('#pseudo-c').text(inputPseudo);
            }

        });

        $('#btn-bg').click(function(){
            var inputBg = $('#bg-form').val();
            if(inputBg != ''){
                localStorage.setItem("bg", inputBg);
                $('#main-content').removeClass('bg1, bg2, bg3').addClass('bg'+inputBg);
            }
        });


        ApiCaller = new ApiCaller();

        StatusBar.backgroundColorByHexString("#40A497");

        var myApp = new Framework7();
        var $$ = Dom7;

        mainView = myApp.addView('.view-main', {
            dynamicNavbar: true
        });

        $$('.create-profil').on('click', function () {
            app.profilPage();
        });

        $$('.create-geoloc').on('click', function () {
            app.findGeoloc();
        });

        //googleAnalytics.init();
        //globalization.init();
        //compass.init();
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