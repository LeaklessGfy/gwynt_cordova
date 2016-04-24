var LocalStorageApi = {
    init: function () {
        LocalStorageApi.eventListener();
    },

    eventListener: function () {
        $('#btn-pseudo').click(function() {
            LocalStorageApi.changeProfil();
        });

        $('#btn-bg').click(function(){
            LocalStorageApi.changeBackground();
        });
    },
    
    changeProfil: function () {
        var inputPseudo = $('#pseudo-form').val();

        if (inputPseudo != '') {
            localStorage.setItem("login", inputPseudo);
            $('#pseudo-c').text(inputPseudo);
        }
    },
    
    changeBackground: function () {
        var inputBg = $('#bg-form').val();

        if (inputBg != '') {
            localStorage.setItem("bg", inputBg);
            $('.page-content').removeClass('bg1 bg2');
            $('.page-content').addClass('bg'+inputBg);
        }
    }
};