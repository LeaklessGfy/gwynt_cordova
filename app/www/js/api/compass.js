var CompassApi = {
    getCurrent: function () {
        navigator.compass.getCurrentHeading(CompassApi.onSuccess, CompassApi.onError);
    },
    onSuccess: function(heading) {
        alert('Heading: ' + heading.magneticHeading);
    },
    onError: function(compassError) {
        alert('Compass Error: ' + compassError.code);
    }
};