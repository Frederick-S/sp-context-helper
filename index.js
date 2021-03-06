/// <reference path="./typings/index.d.ts"/>
"use strict";
function contextHelper(webUrl, isAppContextSite) {
    var web = null;
    var site = null;
    var clientContext = null;
    var appContextSite = null;
    if (!webUrl || isAppContextSite) {
        clientContext = SP.ClientContext.get_current();
    }
    else {
        clientContext = new SP.ClientContext(webUrl);
    }
    if (isAppContextSite) {
        appContextSite = new SP.AppContextSite(clientContext, webUrl);
        web = appContextSite.get_web();
        site = appContextSite.get_site();
    }
    else {
        web = clientContext.get_web();
        site = clientContext.get_site();
    }
    return {
        web: web,
        site: site,
        clientContext: clientContext,
        appContextSite: appContextSite
    };
}
exports.contextHelper = contextHelper;
