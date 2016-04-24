var ApiCaller = {
    baseUrl: "http://adbbb436.ngrok.io", //To change with ngrok in pre-prod
    port: 80,
    method: "GET",
    type: "json",
    url: "",
    arg: [],

    call: function(callSuccess, callError) {
        Loader.start();

        $.ajax({
            url: ApiCaller.url,
            data: ApiCaller.arg,
            dataType: ApiCaller.type,
            type: ApiCaller.method,

            success: callSuccess,
            error: callError
        }).always(Loader.stop);
    },

    urlConstructor: function(url, method) {
        ApiCaller.method = method;
        ApiCaller.url = ApiCaller.baseUrl + ":" + ApiCaller.port + "/" + url;
    },

    get: function (url, arg, callSuccess, callError) {
        ApiCaller.arg = arg;
        ApiCaller.urlConstructor(url, "GET", arg);

        ApiCaller.call(callSuccess, callError);
    },

    post: function (url, arg, callSuccess, callError) {
        ApiCaller.arg = arg;
        ApiCaller.urlConstructor(url, "POST");

        ApiCaller.call(callSuccess, callError);
    },

    onError: function () {
        alert("API error");
    }
};