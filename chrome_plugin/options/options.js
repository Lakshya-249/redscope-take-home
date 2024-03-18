// Retrieve sessionId from Chrome storage
chrome.storage.sync.get(["sessionId"], function (result) {
  // Display sessionId in the options page
  document.getElementById(
    "optionpage"
  ).innerText = `Session ID: ${result.sessionId}`;
});
