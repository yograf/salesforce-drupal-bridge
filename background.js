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

chrome.pageAction.onClicked.addListener(function(tab) {
  chrome.storage.sync.get({drupal_url: ''}, function(items) {
    if (items.drupal_url) {

      var urlObj = new URL(tab.url);
     var sfid = urlObj.pathname.substring(1);
     chrome.tabs.create({ url: items.drupal_url + "/salesforce/" + sfid})
    }
  });
});
