var StatusBarApi = {
    status: 0,

    init: function () {
        if (StatusBarApi.status == 0) {
            StatusBar.show();
            StatusBar.backgroundColorByHexString("#40A497");

            StatusBarApi.status = 1;
        } else {
            StatusBar.hide();

            StatusBarApi.status = 0;
        }
    }
};