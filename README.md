# sp-context-helper [![Build Status](https://travis-ci.org/Frederick-S/sp-context-helper.svg?branch=master)](https://travis-ci.org/Frederick-S/sp-context-helper)
Get associated SP.Web and SP.Site by url.

## Installation
```
npm install sp-context-helper --save
```

## Usage
### JavaScript
```js
import { contextHelper } from 'sp-context-helper';

let contextWrapper = contextHelper('web url');
```

### TypeScript
```
typings install dt~microsoft.ajax --global --save
typings install dt~sharepoint --global --save
```

```js
/// <reference path="./typings/index.d.ts"/>

import { contextHelper, IContextWrapper } from 'sp-context-helper';

let contextWrapper: IContextWrapper = contextHelper('web url');
```

## API
```js
interface IContextWrapper {
    web: SP.Web;
    site: SP.Site;
    clientContext: SP.ClientContext;
    appContextSite: SP.AppContextSite;
}

contextHelper(webUrl?: string, isAppContextSite?: boolean): IContextWrapper
```

To query current web, use `contextHelper()`, to query host web, use `contextHelper('host url', true)`, to query web in same domain, use `contextHelper('web url')`.

## Test
```
cd sp-context-helper/test/Scripts/src
npm install
webpack
```

Then open the project under test folder by Visual Studio and deploy the Add-in.

## License
MIT.
