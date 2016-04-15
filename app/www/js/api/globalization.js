var globalization = {
    init: function () {
        navigator.globalization.getPreferredLanguage(
            function (language) {
                alert('language: ' + language.value + '\n');
                app.setLocal = language.value;
            },
            function () {alert('Error getting language\n');}
        );
    }
};