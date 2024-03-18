import { WebSocketServer } from "ws";
import fs from "fs-extra";
import { dataFolderName } from "./constants.js";
import path from "path";
import filecount from "./filecount.js";

const startWebSocketServer = () => {
  const wss = new WebSocketServer({ port: 3008 });
  wss.on("connection", (ws) => {
    console.log("WebSocket connection established.");

    // Handle incoming messages
    ws.on("message", (message) => {
      const payload = JSON.parse(message.toString());
      processPayload(payload);
    });
  });
};

let lastUrl = null;
let id = 1;
const processPayload = async (payload) => {
  const { type, url, data } = payload;
  console.log("*".repeat(80));
  console.log({ type, url, payload });
  console.log("*".repeat(80));

  if (type !== "rrweb events") {
    return;
  }
  const jsonData = JSON.parse(data);

  let dataFilePath;
  if (url === lastUrl) {
    // Simply append to the same file;  No change
    dataFilePath = path.join(dataFolderName, id.toString());
    fs.writeJsonSync(dataFilePath, jsonData, { flag: "a" });
  } else {
    // Adding a new id whenever we see that url is not same...
    id = await filecount();
    dataFilePath = path.join(dataFolderName, id.toString());
    fs.writeJsonSync(dataFilePath, jsonData); // This would empty the files if there's already content
  }

  lastUrl = url;
};

export { startWebSocketServer };
