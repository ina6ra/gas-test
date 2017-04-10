function myFunction(url, char) {
  if( url == null ) url = 'http://www.yahoo.co.jp';
  if( char == null ) char = 'utf8';

  // GASの contentType のデフォルトは application/x-www-form-urlencoded
  var params = {
    'contentType': 'application/x-www-form-urlencoded; charset='+char
  };

  var response = UrlFetchApp.fetch(url, params);

  // getContentText 関数の存在チェック
  if( typeof(response.getContentText) === 'function' )
    response = response.getContentText(char);

  var myRegexp = /<title>([\s\S]*?)<\/title>/i;
  var match = myRegexp.exec(response);
  var title = match[1];

  title = title.replace(/(^\s+)|(\s+$)/g, '');
  Logger.log(title);
  return title;
}
