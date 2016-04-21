var profilPage = {
    init: function() {
        //profilPage.display();
        profilPage.eventListener();
        profilPage.showProfilInfo();
    },

    display: function() {
        var profil = $("#profil");

        if(profil.length == 0) {
            $("#main-content").append($('<div>').load("./js/page/profil/index.html", function() {
                profilPage.eventListener();
                profilPage.showProfilInfo();
            }));
        }

        profil.show();
    },

    eventListener: function(){
        $("#profil .sub-menu li a").click(function() {
            profilPage.handleMenu($(this));
            profilPage.showRightContent($(this));
        });
    },

    handleMenu: function($this) {
        $("#profil .sub-menu li a").removeClass("actif");
        $this.addClass("actif");
    },
    
    showRightContent: function($this) {
        if($this.data("id") == "profil-info") {
            profilPage.showProfilInfo();
        } else {
            profilPage.showContactInfo();
        }
    },

    showProfilInfo: function () {
        var profilInfo = $("#profil-info");

        if(profilInfo.length == 0) {
            $("#profil .content").append($('<div>').load("./js/page/profil/profil-info.html", function() {
                camera.init();
            }));
        }

        $("#contact-info").hide();
        profilInfo.show();
    },
    
    showContactInfo: function () {
        var contactInfo = $("#contact-info");

        if(contactInfo.length == 0) {
            $("#profil .content").append($('<div>').load("./js/page/profil/contact-info.html", function() {
                ContactApi = new ContactApi();
            }));
        }

        $("#profil-info").hide();
        contactInfo.show();
    }
};