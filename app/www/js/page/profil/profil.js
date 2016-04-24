var profilInfo,
    contactInfo,
    appender;

var profilPage = {
    init: function() {
        profilPage.eventListener();

        profilInfo = $("#profil-info");
        contactInfo = $("#contact-info");
        appender = $("#profil .content");

        profilPage.showProfilInfo();
    },

    eventListener: function(){
        $("#profil .sub-menu li a").click(function() {
            profilPage.handleMenu($(this));
            profilPage.handleContent($(this).data('id'));
        });
    },

    handleMenu: function($this) {
        $("#profil .sub-menu li a").removeClass("actif");

        $this.addClass("actif");
    },
    
    handleContent: function(id) {
        if(id == "profil-info") {
            profilPage.showProfilInfo();
        } else {
            profilPage.showContactInfo();
        }
    },

    showProfilInfo: function () {
        profilInfo = $("#profil-info");
        contactInfo = $("#contact-info");

        HydratorCaller.hydrate(profilInfo, appender, "profil/profil-info.html", contactInfo, profilPage.onProfilSuccess);
    },
    
    showContactInfo: function () {
        profilInfo = $("#profil-info");
        contactInfo = $("#contact-info");

        HydratorCaller.hydrate(contactInfo, appender, "profil/contact-info.html", profilInfo, profilPage.onContactSuccess);
    },

    onProfilSuccess: function () {
        CameraApi.init();

        var value = localStorage.getItem("login");
        $('#pseudo-c').text(value);

        var valueBg = localStorage.getItem("bg");
        $('.page-content').addClass("bg"+valueBg);

        $('#btn-pseudo').click(function() {
            var inputPseudo = $('#pseudo-form').val();

            if(inputPseudo != ''){
                localStorage.setItem("login", inputPseudo);
                alert(localStorage.getItem("login"));
                $('#pseudo-c').text(inputPseudo);
            }
        });

        $('#btn-bg').click(function(){
            var inputBg = $('#bg-form').val();

            localStorage.setItem("bg", inputBg);
            $('.page-content').removeClass('bg1 bg2');
            $('.page-content').addClass('bg'+inputBg);
        });
    },

    onContactSuccess: function () {
        ContactApi.init();
    }
};