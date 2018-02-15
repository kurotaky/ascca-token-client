# ascca-token-client

<a href="https://www.npmjs.com/package/ascca-token-client" title="npm"><img src="http://img.shields.io/npm/v/ascca-token-client.svg?style=flat-square"></a>
[![Build Status](https://travis-ci.org/kurotaky/ascca-token-client.svg?branch=master)](https://travis-ci.org/kurotaky/ascca-token-client)

AsccaTokenClient is a JavaScript library for GMO Payment Gateway token settlement.

## Installation
```
npm install ascca-token-client
```

## Usage
### class AsccaTokenClient
Client for tokenization.
Initialization by passing shopId and options.

```js
const AsccaTokenClient = require("ascca-token-client").AsccaTokenClient;
const asccaTokenClient = new AsccaTokenClient(shopId, options = {production: false});
```

#### getToken(cardNumber, cardExpired)

Passing cardNumber and cardExpired will return a token.
The cardExpired(expiration date) format is "YYMM".

```js
const asccaTokenClient = new AsccaTokenClient('testshopid000000');

asccaTokenClient.getToken('4111111111111111', '2210').then((value) => {
  console.log(value);
}, (error) => {
  console.error("error:", error);
});
```

#### url

The production or test URL will be returned.

```js
const asccaTokenClient1 = new AsccaTokenClient("testshopid000000");

// test URL is returned
asccaTokenClient1.url;

const asccaTokenClient2 = new AsccaTokenClient("testshopid000000", options = {production: true});

// production URL is returned
asccaTokenClient2.url;
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
