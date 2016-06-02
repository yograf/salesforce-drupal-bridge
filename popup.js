window.onload = function() {
  chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
  });
  chrome.storage.sync.get({drupal_url: ''}, function(items) {
    var frame = document.querySelector('#frame');
    if (items.drupal_url) {
      chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
        var urlObj = new URL(tabs[0].url);
        var sfid = urlObj.pathname.substring(1);
        frame.setAttribute("src", items.drupal_url + "/salesforce/" + sfid);
        frame.onload = function() {
          
        };
      });
    }
  });
};
