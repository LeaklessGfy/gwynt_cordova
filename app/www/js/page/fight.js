var fightPage = {
    cards: [],
    cardsLeft: 2,
    cardsChanged: [],
    
    init: function (id) {
        SongCaller.play("fight.mp3");
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

        HydratorCaller.hydrate(elem, $("#main-content"), "fight/choose-cards.html", null, function () {}, function () {
            fightPage.cardsLeft = 2;
            fightPage.cardsChanged = [];

            elem.find("a").each( function( index, element ){
                $(this).removeClass("disable");
            });

            fightPage.handleDisplay();

            $('body').on('click', '.change-cards', function() {
                alert('clique');
                fightPage.changeCards($(this));
            });
        });
    },

    submitCards: function () {
        if(fightPage.cardsChanged.length) {
            //Handle new cards
        }

        $('#choose-cards').hide();
        SongCaller.resetLoop();
        SongCaller.play("fight-interlude.mp3", SongCaller.loop);
    },
    
    changeCards: function ($this) {
        var id = $this.data('id');
        var img = $this.find("img");
        var isAlready = fightPage.isAlreadyDisable(id);

        if(isAlready !== false) {
            fightPage.removeCardsToChange(img, isAlready);
        } else {
            if(fightPage.cardsLeft > 0) {
                fightPage.addCardsToChange(img, id);
            } else {
                alert("no cards left");
                return;
            }
        }

        fightPage.handleDisplay();
    },

    isAlreadyDisable: function (id) {
        var lgt = fightPage.cardsChanged.length;
        var val = false;

        for(var i = 0; i < lgt; i++) {
            if(id == fightPage.cardsChanged[i]) {
                val = i;
            }
        }

        return val;
    },

    addCardsToChange: function (img, id) {
        img.addClass('disable');
        fightPage.cardsChanged.push(id);
        fightPage.cardsLeft--;
    },
    
    removeCardsToChange: function (img, id) {
        img.removeClass('disable');
        fightPage.cardsChanged.splice(id, 1);
        fightPage.cardsLeft++;
    },

    handleDisplay: function () {
        $('#choose-cards span').text("(" + fightPage.cardsLeft + "/2)");
        $('#choose-cards p').addClass("color-green").removeClass("color-red");

        if (fightPage.cardsLeft == 0) {
            $('#choose-cards p').removeClass("color-green").addClass('color-red');
        }
    }
};