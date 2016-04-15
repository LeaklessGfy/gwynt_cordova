var Hydrator = {
    hydrateContact: function (contacts) {
        var fullHtml = "";

        for(var i = 0; i < contacts.length; i++) {
            if(contacts[i].inDb == true) {
                fullHtml += Hydrator.handleInDbContact(contacts[i]);
            } else {
                fullHtml += Hydrator.handleNonRegisterContact(contacts[i]);
            }
        }

        $("#contact-list").append(fullHtml);
    },

    handleInDbContact: function (contact) {
        return "<br><hr><li>Name: "+ contact.name + "/ Login : "+contact.login+"/ lvl:" + contact.lvl + "Phone: "+contact.phoneNumber+"</li><br><hr>";
    },

    handleNonRegisterContact: function (contact) {
        return "<li>"+contact.name+ " (" + contact.phone + ") - Inviter</li>";
    },

    //CAMERA
    onCaptureSuccess: function (imageData) {
        $("#profil-img").attr("src", "data:image/jpeg;base64," + imageData);
    }
};