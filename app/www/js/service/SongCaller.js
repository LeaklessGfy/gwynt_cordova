var SongCaller = {
    play: function (s, i) {
        var src = SongCaller.getMediaUrl(s);
        mp3file = new Media(src, null, SongCaller.onCreateError);
        mp3file.play({ numberOfLoops: i });

        return mp3file;
    },

    getMediaUrl: function (s) {
        if(device.platform.toLowerCase() === "android") {
            return "/android_asset/www/" + s;
        }

        return s;
    },
    
    onCreateError: function (e) {
        alert('Media Error');
        alert(JSON.stringify(e));
    }
};