window.addEvent("domready", function () {
  var settings_store = new Store('settings'); 
  
  function updateStyle() {
    document.getElementById('reader-style').innerText = makeGoogleReaderStyle(settings_store.toObject());
  }
  
  updateStyle();

  new FancySettings.initWithManifest(function (settings) {
    for(var setting in settings.manifest) {
      settings.manifest[setting].addEvent("action", updateStyle);
    }
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
