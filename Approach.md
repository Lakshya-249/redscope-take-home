# Approaches Employed in Assignment Completion

- Introduction \*
  This document outlines the various approaches adopted during the completion of the internship project, focusing on the development of file system extension and session management functionalities.

# File System Extension

Problem Statement
The requirement was to extend the file system by adding new files to the resources folder whenever a new link is opened by the user.

- Approach Overview \*
  File Counting Mechanism: Implemented a filecount.js file responsible for counting and returning the number of files in the resources/data_files folder.
  WebSocket Integration: Utilized the count obtained from filecount.js in the web_socket.js file located in the src folder of node_backend. This count was assigned as an identifier (ID) for the files.
  Incrementing ID: Ensured that the ID incremented only when a new URL was opened and remained consistent for the same URL.

# Session Management

Problem Statement
The objective was to generate a session ID whenever a user clicked on the "start session" button and manage session lifecycle effectively.

- Approach Overview \*
  User Interface Integration: Introduced "start session" and "end session" buttons in the public/index.html file, with respective IDs assigned.
  Event Listener Implementation: Implemented an event listener in the content_script (dom-mutation/bundler.js) to trigger session ID creation and incrementation upon clicking the "start session" button. The session ID incremented by 1 for each new session.
  Session ID Handling: Managed session IDs using integers for simplicity, with each new session being assigned an incremented value. Utilized a conditional approach to set the session ID to 0 upon clicking the "end session" button, and increment it to a new value upon starting a new session.
  Data Persistence: Ensured that data persistence was maintained across sessions by properly managing the session ID assignment and retrieval.
  Challenges Faced
  Problem Statement
  Encountered challenges related to maintaining data integrity and persistence during session transitions.

# Challenges Encountered

Data Integrity Issues: When a new session was initiated on the same page, encountered difficulties in retaining initial data packets crucial for proper file system operation.
Session Tracking: In some scenarios, faced issues with tracking session IDs accurately during session transitions, resulting in potential data loss or inconsistency.
Options Management
Problem Statement
Needed to implement options management for displaying session IDs dynamically.

- Approach Overview \*
  Options Page Creation: Developed an options file comprising options.html and options.js to facilitate session ID display.
  Sync Storage Utilization: Leveraged sync storage to store and retrieve session IDs sent to the background script.
  Dynamic Display: Ensured dynamic display of the latest session ID on the options page, reflecting the most recent session created.

# Conclusion

In conclusion, the approaches employed during the completion of the assignment have successfully addressed the objectives, leading to the effective implementation of file system extension and session management functionalities. Despite challenges encountered, these approaches contribute significantly to the overall functionality and usability of the application.
