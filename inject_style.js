chrome.extension.sendRequest({action: 'gpmeGetOptions'}, function(options) {
  var style = document.createElement('style');

  var rules = document.createTextNode(window.makeGoogleReaderStyle(options));

  style.type = 'text/css';
  style.appendChild(rules);
  document.head.appendChild(style);
});
