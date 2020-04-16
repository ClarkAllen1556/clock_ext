// import { Clock } from "./Clock";
import { Clock } from "./Clock.js";
import { TIME_FORMAT } from "./enum.js";
// background-script.js
var contentPort;
var clock = new Clock(new Date());
function portConnected(port) {
    contentPort = port;
    contentPort.postMessage({ msg: "Connected to content script port >> " + JSON.stringify(port) });
    contentPort.postMessage({ msg: clock.getFormattedTime(TIME_FORMAT.HH_MM_SS_12) });
    contentPort.onMessage.addListener((resp) => {
        console.log("Background Port RESP handler >>");
        console.log(JSON.stringify(resp));
        contentPort.postMessage({ msg: clock.getFormattedTime(TIME_FORMAT.HH_MM_SS_12) });
    });
    setInterval(() => contentPort.postMessage({ msg: clock.getFormattedTime(TIME_FORMAT.HH_MM_SS_12) }), 1000);
}
browser.runtime.onConnect.addListener(portConnected);
