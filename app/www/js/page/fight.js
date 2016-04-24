var fightPage = {
    init: function (id) {
        SongCaller.play("fight.mp3", 0);
        fightPage.eventListener();

        if(id == "test") {
            var data = {login: "Test adv", lvl: 12};
            fightPage.setupFight(data);
        } else {
            ApiCaller.get("users/"+id, {}, fightPage.setupFight, ApiCaller.onError);
        }
    },

    eventListener: function () {
        $('#fight-end').click(function () {
            SongCaller.resetLoop();
        });
    },

    setupFight: function (data) {
        $("#player1 .name").text(data.login);
        
        fightPage.chooseCards();
    },
    
    chooseCards: function () {
        var elem = $("#choose-cards");

        HydratorCaller.hydrate(elem, $("#main-content"), "fight/overlay.html", null, function () {
            alert("success");
        });
    },

    submitCards: function () {
        $('#choose-cards').hide();
        SongCaller.resetLoop();
        SongCaller.play("fight-interlude.mp3", 2);
    }
};