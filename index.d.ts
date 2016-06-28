export interface IContextWrapper {
    web: SP.Web;
    site: SP.Site;
    clientContext: SP.ClientContext;
    appContextSite: SP.AppContextSite;
}

export declare function contextHelper(webUrl?: string, isAppContextSite?: boolean): IContextWrapper;