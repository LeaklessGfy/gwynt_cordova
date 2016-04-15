var globalization = {
    init: function () {
        navigator.globalization.getPreferredLanguage(
            function (language) {
                alert('language: ' + language.value + '\n');
                app.setLocal(language.value);
                globalization.changeMsg();
            },
            function () {alert('Error getting language\n');}
        );
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