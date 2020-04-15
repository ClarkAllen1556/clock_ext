// import { Clock } from "./Clock";

import { Clock } from "./Clock.js";
import { TIME_FORMAT } from "./enum.js";
// background-script.js
var contentPort : browser.runtime.Port;
var clock = new Clock(new Date());

function portConnected(port : browser.runtime.Port) {
  contentPort = port;
  contentPort.postMessage({ msg: "Connected to content script port >> " + JSON.stringify(port) });
  contentPort.postMessage({ msg: clock.getFormattedTime(TIME_FORMAT.HH_MM_24) });

  contentPort.onMessage.addListener( (resp : any) => {
    console.log("Background Port RESP handler >>");
    console.log(JSON.stringify(resp));
    contentPort.postMessage({ msg: clock.getFormattedTime(TIME_FORMAT.HH_MM_24) });
  });

  setInterval(() => contentPort.postMessage({ msg: clock.getFormattedTime(TIME_FORMAT.HH_MM_SS_24) }), 1000);
}

browser.runtime.onConnect.addListener(portConnected);
