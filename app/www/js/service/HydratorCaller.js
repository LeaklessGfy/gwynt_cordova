var HydratorCaller = {
    hydrate: function (elem, appender, template, onSuccess, toHide) {
        if(elem.length == 0) {
            appender.append($('<div>').load("./js/page/" + template, onSuccess));
        }

        toHide.hide();
        elem.show();
    }
};