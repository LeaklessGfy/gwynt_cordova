var ApiCaller = function () {
    this.baseUrl = "http://192.168.0.22";
    this.port = 3000;
    this.method = "GET";
    this.type = "json";
    this.url = "";
    this.arg = [];
};

ApiCaller.prototype.call = function (callSuccess, callError) {
    $.ajax({
        url: this.url,
        data: this.arg,
        dataType: this.type,
        type: this.method,

        success: callSuccess,
        error: callError
    });
};

ApiCaller.prototype.urlContructor = function (url, method, arg) {
    this.method = method;
    this.url = this.baseUrl + ":" + this.port + "/" + url;

    if(this.method == "GET" && arg) {
        this.url = this.url + "/" + arg;
    }
};

ApiCaller.prototype.toJson = function (data) {
    return JSON.stringify(data);
};

ApiCaller.prototype.get = function (url, arg, callSuccess, callError) {
    //this.urlContructor(url, "GET", arg);
    //this.call(callSuccess, callError);

    var falseData = this.bouchon(callSuccess);
};

ApiCaller.prototype.post = function (url, arg, callSuccess, callError) {
    this.arg = arg;
    this.urlContructor(url, "POST");

    this.call(callSuccess, callError);
};

ApiCaller.prototype.handleError = function() {
    alert("API error");
};

ApiCaller.prototype.bouchon = function(callSuccess) {
    var rawData = '{"content":[{"name": "Skinra", "latitude": 48.857614, "longitude": 2.372543, "phone": "+33660221919", "lvl": 2}, {"name": "Nicolas", "latitude": 48.857388, "longitude": 2.372693, "phoneNumber": "0685697412", "lvl": 10}, {"name": "Killer91", "latitude": 48.857303, "longitude": 2.373186, "phoneNumber": "0789352416", "lvl": 25}, {"name": "Killer91", "latitude": 48.858009, "longitude": 2.371835, "phoneNumber": "0628745301", "lvl": 14}, {"name": "Rasquial", "latitude": 48.857911, "longitude": 2.372156, "phoneNumber": "0648521469", "lvl": 40}]}';

    $.ajax({
        url: "http://ab392276.ngrok.io/users/false",
        dataType: "json",
        type: "GET",

        success: callSuccess,
        error: function () {
            alert("ERR");
        }
    });

    //return JSON.parse(rawData);
};