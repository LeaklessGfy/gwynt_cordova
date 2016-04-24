var playPage = {
    init: function () {
        SongCaller.play("sound/play.mp3", 5);
        playPage.eventListener();

        playPage.getFights();
    },

    eventListener: function () {
        $('#play-end').click(function () {
            SongCaller.resetLoop();
        });
    },

    getFights: function () {
        ApiCaller.get("users", {free: 1}, playPage.onGetSuccess, ApiCaller.onError);
    },

    onGetSuccess: function (data) {
        var html = "";
        for(var i = 0; i < data.length; i++) {
            html += '<li>' +
                        '<a href="#" class="item-link item-content page-fight" data-id="'+data[i].id+'">' +
                            '<div class="item-media"><i class="icon icon-f7"></i></div>' +
                            '<div class="item-inner">' +
                                '<div class="item-title">'+data[i].login+' (lvl. '+data[i].level+') </div>' +
                                '<div class="item-after">Affronter</div>' +
                            '</div>' +
                        '</a>' +
                    '</li>';
        }

        $('#play .content ul').append(html);
    }
};