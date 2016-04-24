var playPage = {
    init: function () {
        alert(SongCaller);
        SongCaller.play("sound/play.mp3");

        playPage.eventListener();
    },

    startSong: function () {
        mp3file = new Media("/android_asset/www/sound/play.mp3",
            function() {
                alert("playAudio():Audio Success");
            },
            function(err) {
                alert(err);
            }
        );

        mp3file.play();
    },

    eventListener: function () {

    }
};