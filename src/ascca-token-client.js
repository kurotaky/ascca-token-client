"use strict";

import fetch from 'isomorphic-fetch'

export default class AsccaTokenClient {
  constructor(shopId) {
    this.shopId = shopId;
  }

  getToken(cardNo, cardExpire) {
    return fetch('https://test.ascca.jp:2443/ccstokensv/api/requestToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        spid: this.shopId,
        cardNo: cardNo,
        cardExpire:cardExpire
      })
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      return json;
    }).catch(function(error) {
      console.log('request failed', error);
    })
  }
}
