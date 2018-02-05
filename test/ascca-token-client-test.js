"use strict";
import assert from 'power-assert';
import AsccaTokenClient from '../src/ascca-token-client';

describe("ascca-token-client-test", function() {
  describe("#getToken()", () => {
    it("should be success", async () => {
      var asccaTokenClient = new AsccaTokenClient("testpg0000000");
      var response = await asccaTokenClient.getToken('4111111111111111', '2210');
      assert(response.errCode === '00');
      assert(response.token === '0841905582174001');
      assert(response.cardEndNo === '1111');
    });
  });
});
