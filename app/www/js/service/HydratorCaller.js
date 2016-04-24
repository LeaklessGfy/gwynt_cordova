var HydratorCaller = {
    hydrate: function (elem, appender, template, toHide, onSuccess, always) {
        if(elem.length == 0) {
            appender.append($('<div>').load("./views/" + template, onSuccess));
        }

        if(toHide) {
            toHide.hide();
        }
        elem.show();

        if(always) {
            always();
        }
    }
};