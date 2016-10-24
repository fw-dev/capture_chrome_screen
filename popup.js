
window.onload = function() {
  theTimer = setInterval(function() {
    chrome.tabs.captureVisibleTab(null, {
      format: "png",
      quality: 50
    }, function(img_data) {
      var imageItem = document.getElementById("image");
      imageItem.src = img_data;
    });
  }, 1000);
};
