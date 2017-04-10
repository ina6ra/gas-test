var assert = require('assert');
var gas = require('gas-local');
var request = require('sync-request');
var querystring = require('querystring');
var iconv = require('iconv-lite');

// ローカルでのテストでは Logger クラスを無効化する
gas.globalMockDefault.Logger.enabled = false;

var defMock = gas.globalMockDefault;
var customMock = {
  // UrlFetchApp クラスのモックを作成
  UrlFetchApp: {
    // fetch 関数と同じ動作をする処理を書いていく
    fetch: function(url, params) {
      var req = request('GET', url);
      var char = params.contentType.replace(/\s/g, '');
      char = querystring.parse(char, ';');
      req = iconv.decode(req.body, char.charset);
      return req.toString();
    }
  }, __proto__: defMock
};

// ソースフォルダの指定はプロジェクトルートからの相対パス
var glib = gas.require('./src', customMock);

describe('コード.js', function() {
  // mocha がタイムアウトするまでの時間を延長
  this.timeout(4000);

  it('myFunction for yahoo', function() {
      assert.equal(glib.myFunction(), 'Yahoo! JAPAN');
  });

  it('myFunction for livedoor', function() {
      assert.equal(glib.myFunction('http://www.livedoor.com/'), 'livedoor');
  });

  it('myFunction for Shift_JIS', function() {
      assert.equal(glib.myFunction('http://abehiroshi.la.coocan.jp/top.htm', 'sjis'), '阿部 寛のホームページ');
  });
});
