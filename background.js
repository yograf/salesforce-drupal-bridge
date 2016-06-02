chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { urlContains: 'salesforce.com'}
        })
      ],
      actions: [
        new chrome.declarativeContent.ShowPageAction()
      ]
    }]);
  });
});
function fetchFavicon(url) {
    return new Promise(function(resolve, reject) {
        var img = new Image();
        img.onload = function () {
            var canvas = document.createElement("canvas");
            canvas.width =this.width;
            canvas.height =this.height;

            var ctx = canvas.getContext("2d");
            ctx.drawImage(this, 0, 0);

            var dataURL = canvas.toDataURL("image/png");
            resolve(dataURL);
        };
        img.src = 'chrome://favicon/' + url;
    });
}

