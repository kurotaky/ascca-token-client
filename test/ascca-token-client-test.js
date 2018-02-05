"use strict";
import assert from 'power-assert';
import AsccaTokenClient from '../src/ascca-token-client';

describe("ascca-token-client-test", function() {
  describe("#getToken()", () => {
    it("should be success", () => {
      const asccaTokenClient = new AsccaTokenClient("testpg0000000");
      asccaTokenClient.getToken('4111111111111111', '2210');
    });
  });
});
