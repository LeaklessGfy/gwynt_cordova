var Loader = {
    start: function () {
        var loader = $("#app-loader");

        if(loader.length == 0) {
            $("#main-content").append($('<div>').load("./loader.html"));
        }

        loader.show();
    },
    
    stop: function () {
        $("#app-loader").hide();
    }
};