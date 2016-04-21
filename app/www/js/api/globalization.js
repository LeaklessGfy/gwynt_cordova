var globalization = {
    init: function () {
        navigator.globalization.getPreferredLanguage(
            function (language) {
                alert('language: ' + language.value + '\n');

                globalization.setLocal(language.value);
                globalization.changeMsg();
            },
            function () {alert('Error getting language\n');}
        );
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