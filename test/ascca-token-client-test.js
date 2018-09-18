"use strict";
import assert from 'power-assert';
import nock from 'nock';
import AsccaTokenClient from '../src/ascca-token-client';

describe("ascca-token-client-test", function () {
  describe("#getToken()", () => {
    describe("when errCode 00 returns", () => {
      const scope = nock("https://ccstoken.test.ascca.jp")
        .post("/ccstokensv/api/requestToken")
        .reply(200, { errCode: '00', token: '0841905582174001', cardEndNo: '1111' });

      it("should be success", async () => {
        var asccaTokenClient = new AsccaTokenClient("testpg0000000");
        var response = await asccaTokenClient.getToken('4111111111111111', '2210');
        assert(response.errCode === '00');
        assert(response.token === '0841905582174001');
        assert(response.cardEndNo === '1111');
        assert.ok(scope.isDone);
      });
    });

    describe("when errCode 43 returns", () => {
      const scope = nock("https://ccstoken.test.ascca.jp")
        .post("/ccstokensv/api/requestToken")
        .reply(200, { errCode: '43', token: null, cardEndNo: null });

      it("wrong shopId should be invalid", async () => {
        var asccaTokenClient = new AsccaTokenClient("invalidshopid");
        var response = await asccaTokenClient.getToken('4111111111111111', '2210');
        assert(response.errCode === '43');
        assert(response.token === null);
        assert(response.cardEndNo === null);
        assert.ok(scope.isDone);
      });
    });
  });

  describe("#url()", () => {
    it("test url returns", () => {
      var asccaTokenClient = new AsccaTokenClient("testpg0000000");
      assert(asccaTokenClient.url == 'https://ccstoken.test.ascca.jp');
    });

    it("production url returns", () => {
      var asccaTokenClient = new AsccaTokenClient("testpg0000000", { production: true });
      assert(asccaTokenClient.url == 'https://ccstoken.secure.ascca.jp');
    });
  });
});
