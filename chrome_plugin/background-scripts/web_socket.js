let webSocket = null;

function connectToWebSocket() {
  webSocket = new WebSocket("ws://localhost:3008");

  webSocket.onopen = () => {
    console.log("WebSocket connected");
    changeIcon("../icons/server_up.png");
  };

  webSocket.onerror = (err) => {
    console.error("WebSocket error:", err);
    changeIcon("../icons/server_down.png");
  };
}

// Initial connection attempt
connectToWebSocket();

// Reconnect every 5 seconds if not connected
setInterval(() => {
  if (webSocket === null || webSocket.readyState !== WebSocket.OPEN) {
    connectToWebSocket();
  }
}, 5000);

// Message listener from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (webSocket && webSocket.readyState === WebSocket.OPEN) {
    if (message.sessionId && message.sessionId !== 0) {
      console.log({ message });
      // Storing sessionId with name sessionId to use it show in options page...
      chrome.storage.sync.set({ sessionId: message.sessionId });
      webSocket.send(JSON.stringify(message));
    }
  } else {
    console.log("WebSocket not ready, data ignored");
  }
});

function changeIcon(imageIcon) {
  chrome.action.setIcon({ path: imageIcon });
}
