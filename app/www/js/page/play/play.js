var playPage = {
    backgroundSong: null,

    init: function () {
        playPage.backgroundSong = SongCaller.play("sound/play.mp3", 5);
        playPage.eventListener();
    },

    eventListener: function () {
        $('#play-end').click(function () {
            playPage.backgroundSong.stop();
            playPage.backgroundSong.release();
        });
    }
};