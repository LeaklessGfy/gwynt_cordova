var Sharing = {
    tool: null,
    headline: "Rejoignez-moi sur Gwynt ! Et tentez de me défier !",

    init: function (initer) {
        Sharing.tool = initer;
    },

    shareFb: function () {
        Sharing.tool.shareViaFacebook(Sharing.headline, null /* img */, null /* url */, Sharing.onSuccess, Sharing.onError);
    },

    shareTwitter: function () {
        Sharing.tool.shareViaTwitter(Sharing.headline);
    },

    onSuccess: function () {
        console.log('share ok');
    },

    onError: function (error) {
        alert(error);
    }
};