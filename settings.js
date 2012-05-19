var settings = new Store("settings", {
  "fontFamily": "Verdana, Helvetica, Arial, sans-serif",
  "fontSize": 16,
  "lineHeight": 1.5,
  "pageWidth": 960,
  "textAlign": 'justify',
  "firstRun": true
});

function setDefaultStyle() {
  settings.set('fontFamily', 'default');
  settings.set('fontSize', 13);
  settings.set('lineHeight', 1.2);
  settings.set('pageWidth', 1600);
  settings.set('textAlign', 'left');
}

function setEasyReadStyle() {
  settings.set('fontFamily', "Verdana, Helvetica, Arial, sans-serif");
  settings.set('fontSize', 16);
  settings.set('lineHeight', 1.5);
  settings.set('pageWidth', 960);
  settings.set('textAlign', 'justify');
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.action == 'grfsGetOptions') {
    sendResponse(settings.toObject());
  } else if (request.action == 'grfsSetDefaultStyle') {
    setDefaultStyle();
    sendResponse(settings.toObject());
  } else if (request.action == 'grfsSetEasyReadStyle') {
    setEasyReadStyle();
    sendResponse(settings.toObject());
  } else if (request.action == 'grfsHideWelcome') {
    settings.set('firstRun', false);
  }
});
