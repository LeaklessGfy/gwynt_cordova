var SharingApi = {
    tool: null,
    headline: "Rejoignez-moi sur Gwynt ! Et tentez de me défier !",

    init: function () {
        SharingApi.tool = window.plugins.socialsharing;
    },

    shareFb: function () {
        SharingApi.tool.shareViaFacebook(SharingApi.headline, null /* img */, null /* url */, SharingApi.onSuccess, SharingApi.onError);
    },

    shareTwitter: function () {
        SharingApi.tool.shareViaTwitter(SharingApi.headline);
    },

    onSuccess: function () {
        console.log('share ok');
    },

    onError: function (error) {
        alert(error);
    }
};