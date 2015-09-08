var contextHelper = require('sp-context-helper');

var getQueryStringParameter = function (param) {
    var params = document.URL.split("?")[1].split("&");
    var strParams = "";

    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");

        if (singleParam[0] == param) {
            return decodeURIComponent(singleParam[1]);
        }
    }
};

var appWebUrl = getQueryStringParameter('SPAppWebUrl');
var hostWebUrl = getQueryStringParameter('SPHostUrl');

var message = '';

var wrapper1 = contextHelper(appWebUrl);
var wrapper2 = contextHelper(hostWebUrl, true);

wrapper1.clientContext.load(wrapper1.web);
wrapper1.clientContext.executeQueryAsync(function () {
    message += 'App web title is ' + wrapper1.web.get_title() + '.';

    wrapper2.clientContext.load(wrapper2.web);
    wrapper2.clientContext.executeQueryAsync(function () {
        message += ' Host web title is ' + wrapper2.web.get_title() + '.';

        $('#message').text(message);
    }, function (sender, args) {
        $('#message').text(args.get_message());
    });
}, function (sender, args) {
    $('#message').text(args.get_message());
});