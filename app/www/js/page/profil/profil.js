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

        HydratorCaller.hydrate(profilInfo, appender, "profil/profil-info.html", camera.init, contactInfo);
    },
    
    showContactInfo: function () {
        profilInfo = $("#profil-info");
        contactInfo = $("#contact-info");

        HydratorCaller.hydrate(contactInfo, appender, "profil/contact-info.html", function (){}, profilInfo);
    }
};