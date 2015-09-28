function contextHelper(webUrl, crossSite) {
    var web = null;
    var site = null;
    var clientContext = null;
    var appContextSite = null;

    if (!webUrl) {
        clientContext = SP.ClientContext.get_current();
        web = clientContext.get_web();
        site = clientContext.get_site();
    } else if (crossSite) {
        clientContext = SP.ClientContext.get_current();
        appContextSite = new SP.AppContextSite(clientContext, webUrl);
        web = appContextSite.get_web();
        site = appContextSite.get_site();
    } else {
        clientContext = new SP.ClientContext(webUrl);
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

module.exports = contextHelper;
