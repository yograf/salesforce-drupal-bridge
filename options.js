//document.addEventListener("DOMContentLoaded", function(event) {

  chrome.storage.sync.get({drupal_url: ''}, function(items) {
    document.querySelector("#url").value = items.drupal_url;
  });
  document.querySelector('#save').addEventListener('click', function() {
    var drupal_url = document.querySelector("#url").value;
    console.log(drupal_url);
    var message = document.querySelector("#message");
    chrome.storage.sync.set({drupal_url: drupal_url}, function() {
      message.innerHTML = 'Url saved.';
    });
  });
//}
