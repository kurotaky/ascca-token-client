# ascca-token-client

<a href="https://www.npmjs.com/package/ascca-token-client" title="npm"><img src="http://img.shields.io/npm/v/ascca-token-client.svg?style=flat-square"></a>

AsccaTokenClient is a JavaScript library for GMO Payment Gateway token settlement.

## Installation
```
npm install ascca-token-client
```

## Usage
### getToken(shopId, options = {production: false})
```js
var AsccaTokenClient = require("ascca-token-client").AsccaTokenClient;

var atc = new AsccaTokenClient('testshopid000');
atc.getToken('4111111111111111', '2210').then((value) => {
  console.log(value);
}, (error) => {
  console.error("error:", error);
});
```

## License
MIT
