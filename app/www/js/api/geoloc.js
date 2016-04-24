var GeolocApi = {
    getLocalisation: function () {
        Loader.start();
        navigator.geolocation.getCurrentPosition(GeolocApi.onSuccess, GeolocApi.onError);
    },
    
    onSuccess: function (position) {
        Loader.stop();

        alert('Latitude: '          + position.coords.latitude          + '\n' +
            'Longitude: '         + position.coords.longitude         + '\n' +
            'Altitude: '          + position.coords.altitude          + '\n' +
            'Accuracy: '          + position.coords.accuracy          + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
            'Heading: '           + position.coords.heading           + '\n' +
            'Speed: '             + position.coords.speed             + '\n' +
            'Timestamp: '         + position.timestamp                + '\n');
    },
    
    onError: function (error) {
        Loader.stop();

        alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }
};