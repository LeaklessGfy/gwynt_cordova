var ContactApi = function () {
    this.contacts = [];

    this.eventListener();
};

ContactApi.prototype.eventListener = function () {
    $("#find-contact").click(function () {
        ContactApi.findContacts();
    });
};

ContactApi.prototype.process = function (data) {
    var phoneContact = [];
    var name = "Default",
        phone,
        dbUser;

    var usersList = data.content;
    var contacts = ContactApi.contacts;

    alert(JSON.stringify(usersList));

    for (var i = 0; i < contacts.length; i++) {
        if(contacts[i].phoneNumbers) {
            if(contacts[i].displayName) {
                name = contacts[i].displayName;
            }
            phone = contacts[i].phoneNumbers[0].value;

            dbUser = ContactApi.isRegistered(phone, usersList);

            if(dbUser) {
                phoneContact.push({name: name, phone: phone, inDb: true, lvl: dbUser.lvl});

                continue;
            }

            phoneContact.push({name: name, phone: phone, inDb: false, lvl: null});
        }
    }

    Hydrator.hydrateContact(phoneContact);
};

ContactApi.prototype.findContacts = function () {
    var options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;

    navigator.contacts.find(["*"], this.onSuccess, this.onError, options);
};

ContactApi.prototype.onSuccess = function (contacts) {
    ContactApi.contacts = contacts;

    ApiCaller.get("users", [], ContactApi.process, ApiCaller.handleError);
};

ContactApi.prototype.isRegistered = function (phone, usersList) {
    var fullLgt = usersList.length;

    for(var i = 0; i < fullLgt; i++) {
        if(usersList[i].phone == phone) {
            return usersList[i];
        }
    }
};

ContactApi.prototype.onError = function (contactError) {
    alert('onError!');
};