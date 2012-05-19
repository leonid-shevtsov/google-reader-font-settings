chrome.extension.sendRequest({action: 'grfsGetOptions'}, function(options) {
  var style = document.createElement('style');
  var rules = document.createTextNode(window.makeGoogleReaderStyle(options));
  style.type = 'text/css';
  style.appendChild(rules);
  document.head.appendChild(style);

  if (options.firstRun) {
    function hideNotice() {
      document.body.removeChild(document.getElementById('font-settings-notice'));
      chrome.extension.sendRequest({action: 'grfsHideWelcome'});
    }

    var notice = document.createElement('div');
    notice.id = 'font-settings-notice';
    notice.innerHTML = '<div>Font Settings for Google Reader have been installed!<br>'+
      'I\'ve enabled the patented Easy-Read™ setup for you; '+
      'you can now <a href="chrome-extension://'+chrome.i18n.getMessage("@@extension_id")+'/fancy-settings/source/index.html" id="font-settings-settings" target="_blank">modify it in the options</a>, '+
      '<a href="#" id="font-settings-rollback">roll back to the defaults</a>, '+
      'or <a href="#" id="font-settings-hide">hide this notice</a> and enjoy your reading.'+
      '</div>';
    document.body.appendChild(notice);

    document.getElementById('font-settings-settings').onclick = function() {
      hideNotice();
      return true;
    };

    document.getElementById('font-settings-rollback').onclick = function(e) {
      hideNotice();
      chrome.extension.sendRequest({action: 'grfsSetDefaultStyle'});
      window.location.reload();
      e.preventDefault();
    };

    document.getElementById('font-settings-hide').onclick = function(e) {
      hideNotice();
      e.preventDefault();
    };
  }
});
