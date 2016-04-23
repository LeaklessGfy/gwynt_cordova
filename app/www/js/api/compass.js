var Compass = {
    init: function () {
        //var options = { frequency: 1000 };
        //navigator.compass.watchHeading(compass.onSuccess, compass.onError, options);
    },
    getCurrent: function () {
        navigator.compass.getCurrentHeading(Compass.onSuccess, Compass.onError);
    },
    onSuccess: function(heading) {
        alert('Heading: ' + heading.magneticHeading);
    },
    onError: function(compassError) {
        alert('Compass Error: ' + compassError.code);
    }
};