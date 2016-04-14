$(document).ready(function() {
    $(document).bind("deviceready", function() {
        $('h1').text('Gwynt');
        app.onDeviceReady();
    });
});

var app = {
    onDeviceReady: function() {
        app.findContacts();
        app.findGeoloc();
    },
    
    findContacts: function() {
        var options = new ContactFindOptions();
        options.filter = "";
        options.multiple = true;
        navigator.contacts.find(["*"], app.onSuccess, app.onError, options);
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
    },

    //Success
    onSuccess: function(contacts) {
        var info = [];
        for (var i = 0; i < contacts.length; i++) {
            var name = "";
            var phone = "";

            if(contacts[i].displayName) {
                name = contacts[i].displayName;
            }
            if(contacts[i].phoneNumbers) {
                phone = contacts[i].phoneNumbers[0].value;
            }
            
            info.push({name: name, phoneNumber: phone});
        }

        app.hydrateHtml(info);
    },

    hydrateHtml: function(info) {
        var elem = document.getElementById("table");
        
        for(var i = 0;i < info.length; i++) {
            var registeredUser = app.checkIfContactExist(info[i].phoneNumber);

            if(registeredUser) {
                var registerHtml = "<tr><td>"+ registeredUser.name + "</td><td>" + registeredUser.lvl + "</td><td>"+registeredUser.phoneNumber+"</td><td>"+registeredUser.latitude+"</td><td>"+registeredUser.longitude+"</td></tr>";
                elem.innerHTML = elem.innerHTML + registerHtml;

                continue;
            }

            var newHtml = "<tr><td>"+info[i].name + "</td><td></td><td>"+info[i].phoneNumber+"</td><td></td></td><td></td></tr>";
            elem.innerHTML = elem.innerHTML + newHtml;
        }
    },

    getCaller: function() {
        var rawData = '[{"name": "Skinra", "latitude": 48.857614, "longitude": 2.372543, "phoneNumber": "+33660221919", "lvl": 2}, {"name": "Nicolas", "latitude": 48.857388, "longitude": 2.372693, "phoneNumber": "0685697412", "lvl": 10}, {"name": "Killer91", "latitude": 48.857303, "longitude": 2.373186, "phoneNumber": "0789352416", "lvl": 25}, {"name": "Killer91", "latitude": 48.858009, "longitude": 2.371835, "phoneNumber": "0628745301", "lvl": 14}, {"name": "Rasquial", "latitude": 48.857911, "longitude": 2.372156, "phoneNumber": "0648521469", "lvl": 40}]';

        return JSON.parse(rawData);
    },

    checkIfContactExist: function(contact) {
        var caller = app.getCaller();

        for(var i = 0; i < caller.length; i++) {
            if(caller[i].phoneNumber == contact) {
                return caller[i];
            }
        }
    },
    
    onError: function(contactError) {
        alert('onError!');
    }
};

app.initialize();