/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
$(document).ready(function() {
    $(document).bind("deviceready", function() {
        $('h1').text('test juyt h§yt');
        app.onDeviceReady();

    });
});
var app = {

    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
        app.findContacts();
        app.findGeoloc();
    },

    //From dock
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

            if(contacts[i].phoneNumbers[0]) {
                phone = contacts[i].phoneNumbers[0].value;
            }

            //alert(name);
            //alert(phone);

            info.push({name: name, phoneNumber: phone});
        }

        app.hydrateHtml(info);
    },

    hydrateHtml: function(info) {
        var elem = document.getElementById("contact");
        
        for(var i = 0;i < info.length; i++) {
            var newHtml = "<p>" + info[i].name + ": " + info[i].phoneNumber + "</p>";
            elem.innerHTML = elem.innerHTML + newHtml;
        }
    },

    // onError: Failed to get the contacts
    onError: function(contactError) {
        alert('onError!');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();