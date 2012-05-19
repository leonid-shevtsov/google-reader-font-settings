window.addEvent("domready", function () {
  var settings_store = new Store('settings'); 
  
  function updateStyle(s) {
    if (!s)
      s = settings_store.toObject();
    document.getElementById('reader-style').innerText = makeGoogleReaderStyle(s);
  }

  function setDefaultStyle() {
    chrome.extension.sendRequest({action: 'grfsSetDefaultStyle'}, function(s) {
      updateStyle(s);
    });
  }
  
  function setEasyReadStyle() {
    chrome.extension.sendRequest({action: 'grfsSetEasyReadStyle'}, function(s) {
      updateStyle(s);
    });
  }
  
  updateStyle();

  new FancySettings.initWithManifest(function (settings) {
    for(var setting in settings.manifest) {
      settings.manifest[setting].addEvent("action", function(v) { updateStyle(); });
    }
    settings.manifest.presetDefault.addEvent('action', setDefaultStyle);
    settings.manifest.presetEasyRead.addEvent('action', setEasyReadStyle);
  });

  document.getElementById('toggle-fullscreen').onclick = function() {
    var current = document.getElementById('preview').className;
    if (current.indexOf('fullscreen')>=0)
      document.getElementById('preview').className='';
    else
      document.getElementById('preview').className='fullscreen';
    return false;
  };
});
