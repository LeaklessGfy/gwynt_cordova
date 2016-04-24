var fightPage = {
    eventLoaded: false,
    decks: [],
    cards: [],
    cardsFamily: 1,
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
        if(!fightPage.eventLoaded) {
            $('body').on('click', '.change-cards', function() {
                fightPage.changeCards($(this));
            });

            fightPage.eventLoaded = true;
        }
        
        $('#fight-end').click(function () {
            SongCaller.reset();
        });
    },

    setupFight: function (data) {
        fightPage.cardsLeft = 2;
        fightPage.cardsChanged = [];
        cards = [];
        
        $("#player1 .name").text(data.login);
        $("#player2 .name").text(user.login);

        ApiCaller.get("decks/"+user.id, {}, fightPage.getDeck, ApiCaller.onError);
    },

    getDeck: function (data) {
        fightPage.deck = data;
        //TODO -- Function to get random card from deck
        fightPage.cards = [{id: 1, img: "N01.png"}, {id: 2, img: "N02.png"}, {id: 3, img: "N03.png"}, {id: 4, img: "N04.png"}, {id: 5, img: "N05.png"}, {id: 6, img: "N06.png"}, {id: 7, img: "N07.png"}, {id: 8, img: "N08.png"}, {id: 9, img: "N09.png"}, {id: 10, img: "N10.png"}];

        fightPage.chooseCards();
    },
    
    chooseCards: function () {
        var elem = $("#choose-cards");

        HydratorCaller.hydrate(elem, $("#main-content"), "fight/choose-cards.html", null, function () {
            function isEven(n) {
                return n % 2 == 0;
            }

            var html = "";
            for(var i = 0; i < 10; i++) {
                var newRow = isEven(i);
                if(newRow) {
                    html += '<div class="row">'
                }
                
                html += '<div class="col-50"><a href="#" class="change-cards" data-id="'+fightPage.cards[i].id+'"><img src="img/cards/'+fightPage.cardsFamily+'/'+fightPage.cards[i].img+'" alt="img" width="100%"></a></div>';

                if(!newRow) {
                    html += '</div>';
                }
            }

            $("#choose-cards .content").append(html);
        }, function () {
            fightPage.handleDisplay();
        });
    },

    submitCards: function () {
        if(fightPage.cardsChanged.length) {
            //Handle new cards
        }

        $('#choose-cards').hide();
        SongCaller.reset();
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
        var val = false;

        for(var i = 0; i < 2; i++) {
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