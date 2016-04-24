var SongCaller = {
    mp3: null,

    play: function (s, iopt) {
        var opt = null;
        if(iopt) {
            opt = iopt;
        }

        var src = SongCaller.getMediaUrl(s);
        mp3file = new Media(src, null, SongCaller.onCreateError, opt);
        mp3file.play();

        SongCaller.mp3 = mp3file;
    },

    resetLoop: function () {
        if(SongCaller.mp3 != null) {
            SongCaller.mp3.stop();
            SongCaller.mp3.release();
            SongCaller.mp3 = null;
        }
    },

    loop: function (status) {
        if (status === Media.MEDIA_STOPPED && SongCaller.mp3 != null) {
            SongCaller.mp3.play();
        }
    },

    getMediaUrl: function (s) {
        if(device.platform.toLowerCase() === "android") {
            return "/android_asset/www/sound/" + s;
        }

        return "sound/" + s;
    },
    
    onCreateError: function (e) {
        alert('Media Error');
        alert(JSON.stringify(e));
    }
};