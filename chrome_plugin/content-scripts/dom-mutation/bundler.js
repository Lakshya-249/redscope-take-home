/**
 * @implNote
 * 1. We could have imported a web_socket client here, and directly interacted with it.  There is a big problem
 * with that approach - hence we reverted, and now allowing only background script to talk over web socket:
 *
 *  We would have a content script injected into all the pages ==> we would have as many web_socket connections
 * as we have tabs open
 * 2. And sending message to background script is very trivial.  Its the background script which talks to
 * web socket
 */
// import { v4 as uuidv4 } from "uuid";

var val = 0;
var valeb = 0;
rrweb.record({
  emit(event) {
    const url = window.top.location.href;
    const payload = {
      sessionId: 0,
      url: url,
      type: "rrweb events",
      data: JSON.stringify(event),
    };
    // Send message to background script
    chrome.runtime.sendMessage({ ...payload, sessionId: valeb });
  },
});

// Adding an eventListner for adding new session after closing and restarting on clicking the button with id startsession1 and end session2
document.addEventListener("click", (e) => {
  var target = e.target;
  if (target && target.id === "startsession1") {
    val++; // Increment valeb
    valeb = val;
    // When the "startsession" button is clicked, send a message to content script to check and send the session ID
  } else if (target && target.id === "endsession1") {
    valeb = 0;
  }
});
