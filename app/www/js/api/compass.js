var compass = {
    init: function () {
        navigator.compass.getCurrentHeading(compass.onSuccess, compass.onError);
    },
    onSuccess: function(heading) {
        alert('Heading: ' + heading.magneticHeading);
    },
    onError: function(compassError) {
        alert('Compass Error: ' + compassError.code);
    }
};