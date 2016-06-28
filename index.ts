/// <reference path="./typings/index.d.ts"/>

export interface IContextWrapper {
    web: SP.Web;
    site: SP.Site;
    clientContext: SP.ClientContext;
    appContextSite: SP.AppContextSite;
}

export function contextHelper(webUrl?: string, isAppContextSite?: boolean): IContextWrapper {
    let web: SP.Web = null;
    let site: SP.Site = null;
    let clientContext: SP.ClientContext = null;
    let appContextSite: SP.AppContextSite = null;

    if (!webUrl || isAppContextSite) {
        clientContext = SP.ClientContext.get_current();
    } else {
        clientContext = new SP.ClientContext(webUrl);
    }

    if (isAppContextSite) {
        appContextSite = new SP.AppContextSite(clientContext, webUrl);
        web = appContextSite.get_web();
        site = appContextSite.get_site();
    } else {
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