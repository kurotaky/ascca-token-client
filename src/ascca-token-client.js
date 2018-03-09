'use strict'

import promise from 'es6-promise/auto'
import fetch from 'isomorphic-fetch'

export default class AsccaTokenClient {
  constructor (shopId, options = {production: false}) {
    this.shopId = shopId
    this.url = options.production ? 'https://secure.ascca.jp:2443' : 'https://test.ascca.jp:2443'
  }

  getToken (cardNo, cardExpire) {
    return fetch(this.url + '/ccstokensv/api/requestToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        spid: this.shopId,
        cardNo: cardNo,
        cardExpire: cardExpire
      })
    }).then(function (response) {
      return response.json()
    }).then(function (json) {
      return json
    }).catch(function (error) {
      console.log('request failed', error)
    })
  };

  url () {
    return this.url
  };
}

if (typeof window !== 'undefined') {
  !window.AsccaTokenClient && (window.AsccaTokenClient = AsccaTokenClient)
}
