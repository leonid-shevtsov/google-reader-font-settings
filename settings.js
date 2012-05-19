var settings = new Store("settings", {
  "fontFamily": "default",
  "fontSize": 13,
  "lineHeight": 1.2,
  "pageWidth": 1600,
  "textAlign": 'left'
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.action == 'gpmeGetOptions') {
    sendResponse(settings.toObject());
  }
});
