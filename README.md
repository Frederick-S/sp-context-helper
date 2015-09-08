# sp-context-helper
A helper to return SP.ClientContext/SP.Web/SP.Site in app web or normal web.

## Installation
```
npm install sp-context-helper --save
```

## Usage
```js
var contextHelper = require('sp-context-helper');

// contextHelper(webUrl, crossSite)
var wrapper = contextHelper('host web url', true);

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
