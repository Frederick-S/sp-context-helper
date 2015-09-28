# sp-context-helper
A helper to return SP.ClientContext/SP.Web/SP.Site in (app) web.

## Installation
```
npm install sp-context-helper --save
```

## Usage
```js
var contextHelper = require('sp-context-helper');

// Query host web in an app web
var wrapper1 = contextHelper('host web url', true);

// Query web by url
var wrapper2 = contextHelper('web url');

// Query current web
var wrapper3 = contextHelper();

/* wrapper:
{
    web: SP.Web
    site: SP.Site
    clientContext: SP.ClientContext,
    appContextSite: SP.AppContextSite
}
*/
```

## License
MIT.
