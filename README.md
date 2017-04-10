# gas-test

### setup

- JP: [Google Apps Scriptの開発をモダンに行う方法 - Speee DEVELOPER BLOG](http://tech.speee.jp/entry/2016/04/28/190236)
- EN: [danthareja/node-google-apps-script: The easiest way to develop Google Apps Script projects](https://github.com/danthareja/node-google-apps-script)

```terminal
$ npm install -g yarn node-google-apps-script
$ gapps auth ./client_secret_<client_secret_key>.json
Please visit the following url in your browser (you will only have to do this once): https://accounts.google...
-> URL access and Authentication.
Successfully Authenticated with Google Drive!
$ git clone https://github.com/ina6ra/gas-test
$ cd gas-test
$ yarn install
$ cp gapps.config.sample.json gapps.config.json
-> Edit fileId.
```

### test & upload

```terminal
$ yarn gulp upload
yarn gulp v0.21.3
$ "/path/to/code/gas-test/node_modules/.bin/gulp" upload
[17:18:44] Using gulpfile /path/to/code/gas-test/gulpfile.js
[17:18:44] Starting 'mocha'...

  コード.js
    ✓ myFunction for yahoo (998ms)
    ✓ myFunction for livedoor (325ms)
    ✓ myFunction for Shift_JIS (150ms)

  3 passing (1s)

[17:18:46] Finished 'mocha' after 1.95 s
[17:18:46] Starting 'upload'...
[17:18:51] Finished 'upload' after 5.09 s
✨  Done in 7.84s.
```

### more

- [gulp と mocha を使って UrlFetchApp のテストをする方法 - Qiita](http://qiita.com/ina6ra/items/85b098d05000bcee9ac2)
