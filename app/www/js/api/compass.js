var compass = {
    init: function () {
        var options = { frequency: 1000 };  // Update every 3 seconds
        navigator.compass.watchHeading(compass.onSuccess, compass.onError, options);
    },
    onSuccess: function(heading) {
        if(header.magneticHeading > 90) {
            alert('Heading: ' + heading.magneticHeading);
        }
    },
    onError: function(compassError) {
        alert('Compass Error: ' + compassError.code);
    }
};

