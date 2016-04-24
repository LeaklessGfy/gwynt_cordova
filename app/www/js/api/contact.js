var ContactApi = {
    init: function () {
        ContactApi.eventListener();
    },

    eventListener: function () {
        $("#find-contact").click(function () {
            ContactApi.findContacts();
        });
    },

    findContacts: function () {
        Loader.start();

        var options = new ContactFindOptions();
        options.filter = "";
        options.multiple = true;

        navigator.contacts.find(["*"], ContactApi.onSuccess, ContactApi.onError, options);
    },

    onSuccess: function (contacts) {
        $("#contact-list").append(ContactApi.getHtml(contacts));

        Loader.stop();
    },

    onError: function () {
        Loader.stop();

        alert('onError!');
    },

    getHtml: function (contacts) {
        var phoneContact = [];

        var html = "", name, phone;

        for (var i = 0; i < contacts.length; i++) {
            if(contacts[i].phoneNumbers) {
                if(contacts[i].displayName) {
                    name = contacts[i].displayName;
                }

                phone = contacts[i].phoneNumbers[0].value;
                phoneContact.push({name: name, phone: phone, inDb: false, lvl: null, login: null});

                html += ContactApi.prepareNew(name, phone);
            }
        }

        return html;
    },

    prepareNew: function (name, phone) {
        return "<li>" + name + " (" + phone + ") - Inviter</li>";
    }
};