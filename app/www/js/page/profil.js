var profilInfo,
    contactInfo,
    appender;

var profilPage = {
    init: function() {
        profilPage.eventListener();
        profilPage.refreshDomObject();
        profilPage.showProfilInfo();
    },

    eventListener: function(){
        $("#profil .sub-menu li a").click(function() {
            profilPage.handleMenu($(this));
            profilPage.handleContent($(this).data('id'));
        });
    },

    refreshDomObject: function () {
        profilInfo = $("#profil-info");
        contactInfo = $("#contact-info");
        appender = $("#profil .content");
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
        profilPage.refreshDomObject();

        HydratorCaller.hydrate(profilInfo, appender, "profil/profil-info.html", contactInfo, profilPage.onProfilSuccess);
    },
    
    showContactInfo: function () {
        profilPage.refreshDomObject();

        HydratorCaller.hydrate(contactInfo, appender, "profil/contact-info.html", profilInfo, profilPage.onContactSuccess);
    },

    onProfilSuccess: function () {
        CameraApi.init();

        $('#pseudo-c').text(localStorage.getItem("login"));
        $('.page-content').addClass("bg" + localStorage.getItem("bg"));

        LocalStorageApi.init();
    },

    onContactSuccess: function () {
        ContactApi.init();
    }
};