# ascca-token-client

<a href="https://www.npmjs.com/package/ascca-token-client" title="npm"><img src="http://img.shields.io/npm/v/ascca-token-client.svg?style=flat-square"></a>
[![Build Status](https://travis-ci.org/kurotaky/ascca-token-client.svg?branch=master)](https://travis-ci.org/kurotaky/ascca-token-client)

AsccaTokenClient is a JavaScript library for GMO Payment Gateway token settlement.

## Installation
```
npm install ascca-token-client
```

## Usage
### getToken(shopId, options = {production: false})
```js
var AsccaTokenClient = require("ascca-token-client").AsccaTokenClient;

var asccaTokenClient = new AsccaTokenClient('testshopid000');
asccaTokenClient.getToken('4111111111111111', '2210').then((value) => {
  console.log(value);
}, (error) => {
  console.error("error:", error);
});
```

## Sample
### For browsers.

```
git clone git@github.com:kurotaky/ascca-token-client.git
cd ascca-token-client
npm i
npm run build
npm run webpack
open sample.html
```

Try putting your card number and expiration date in form.

## License
[MIT](https://github.com/kurotaky/ascca-token-client/blob/master/LICENSE)
