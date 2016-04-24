var GlobalizationApi = {
    getCurrentLocal: function () {
        navigator.globalization.getPreferredLanguage(GlobalizationApi.onSuccess, GlobalizationApi.onError);
    },

    onSuccess: function (language) {
        alert('language: ' + language.value + '\n');

        Globalization.setLocal(language.value);
        Globalization.changeMsg();
    },

    onError: function () {
        alert('Error getting language\n');
    },

    setLocal: function (local) {
        localLanguage = local;
    },

    changeMsg: function() {
        var title = $("#langTitle");

        if(localLanguage == "fr-FR") {
            title.text("Bienvenue");
        } else {
            title.text("Welcome");
        }
    }
};