/// <reference path='./typings/index.d.ts'/>
/// <reference path='../../../typings/index.d.ts'/>

import { contextHelper, IContextWrapper } from '../../../index';

let getQueryStringParameter = function (param: string): string {
    let params: Array<string> = document.URL.split('?')[1].split('&');
    let strParams: string = '';

    for (let i: number = 0; i < params.length; i = i + 1) {
        let singleParam = params[i].split('=');

        if (singleParam[0] === param) {
            return decodeURIComponent(singleParam[1]);
        }
    }
};

let message: string = '';
let appWebUrl: string = getQueryStringParameter('SPAppWebUrl');
let hostWebUrl: string = getQueryStringParameter('SPHostUrl');

let wrapper1: IContextWrapper = contextHelper(appWebUrl);
let wrapper2: IContextWrapper = contextHelper(hostWebUrl, true);
let wrapper3: IContextWrapper = contextHelper();

wrapper1.clientContext.load(wrapper1.web);
wrapper1.clientContext.executeQueryAsync(function () {
    message += 'App web title is ' + wrapper1.web.get_title() + '.';

    wrapper2.clientContext.load(wrapper2.web);
    wrapper2.clientContext.executeQueryAsync(function () {
        message += ' Host web title is ' + wrapper2.web.get_title() + '.';

        wrapper3.clientContext.load(wrapper3.web);
        wrapper3.clientContext.executeQueryAsync(function () {
            message += ' current web title is ' + wrapper3.web.get_title() + '.';

            $('#message').text(message);
        }, function (sender: any, args: SP.ClientRequestFailedEventArgs) {
            $('#message').text(args.get_message());
        });
    }, function (sender: any, args: SP.ClientRequestFailedEventArgs) {
        $('#message').text(args.get_message());
    });
}, function (sender: any, args: SP.ClientRequestFailedEventArgs) {
    $('#message').text(args.get_message());
});