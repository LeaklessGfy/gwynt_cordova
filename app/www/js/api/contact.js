var ContactApi = function () {
    this.contacts = [];
    this.eventListener();
};

ContactApi.prototype.eventListener = function () {
    $("#find-contact").click(function () {
        ContactApi.findContacts();
    });

    $("#synchronize-contact").click(function() {
        ContactApi.synchronize();
    });
};

ContactApi.prototype.findContacts = function () {
    var options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;

    navigator.contacts.find(["*"], this.onSuccess, this.onError, options);
};

ContactApi.prototype.onSuccess = function (contacts) {
    var phoneContact = [],
        fullHtml = "",
        name = "Default",
        phone;

    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].phoneNumbers) {
            if(contacts[i].displayName) {
                name = contacts[i].displayName;
            }
            phone = contacts[i].phoneNumbers[0].value;
            phoneContact.push({name: name, phone: phone, inDb: false, lvl: null, login: null});

            fullHtml += ContactApi.preparedNew(name, phone);
        }
    }

    $("#contact-list").append(fullHtml);
    ContactApi.contacts = phoneContact;
};

ContactApi.prototype.onError = function (contactError) {
    alert('onError!');
};

ContactApi.prototype.synchronize = function () {
    ApiCaller.get("users", [], function (data) {
        var contacts = ContactApi.contacts,
            contactsLength = contacts.length,
            inDb;

        for(var i = 0; i < contactsLength; i++) {
            inDb = ContactApi.isRegistered(contacts[i].phone, data.content);

            if(inDb) {
                alert("Kangourou");
            }
        }

    }, ApiCaller.handleError);
};

ContactApi.prototype.isRegistered = function (phone, usersList) {
    var fullLgt = usersList.length;

    for(var i = 0; i < fullLgt; i++) {
        if(usersList[i].phone == phone) {
            return usersList[i];
        }
    }
};

ContactApi.prototype.preparedNew = function (name, phone) {
    return "<li>" + name + " (" + phone + ") - Inviter</li>";
};