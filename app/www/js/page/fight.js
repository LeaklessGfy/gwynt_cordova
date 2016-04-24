var fightPage = {
    init: function (id) {
        if(id) {
            var data = {login: "Test adv", lvl: 12};

            fightPage.startFight(data);
            return;
        }

        ApiCaller.get("users/"+id, {}, fightPage.startFight, ApiCaller.onError);
    },

    startFight: function (data) {
        
    }
};