var HydratorCaller = {
    hydrate: function (elem, appender, template, toHide, onSuccess) {
        if(elem.length == 0) {
            appender.append($('<div>').load("./js/page/" + template, onSuccess));
        }

        toHide.hide();
        elem.show();
    }
};