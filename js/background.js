// import { Clock } from "./Clock";
import { Clock } from "./Clock.js";
import { TIME_FORMAT } from "./enum.js";
// background-script.js
let clock = new Clock(new Date());
browser.runtime.onConnect.addListener(portConnected);
function setClockText() {
    browser.browserAction.setBadgeText({ text: clock.getFormattedTime(TIME_FORMAT.HH_MM_SS_24) });
    browser.browserAction.setTitle({ title: clock.getFormattedTime(TIME_FORMAT.HH_MM_SS_24) });
}
function portConnected(port) {
    port.postMessage({ msg: `BACKGROUND SCRIPT MESSAGE RECEIVED : ${clock.getFormattedTime(TIME_FORMAT.HH_MM_SS_24)} >> ` });
    setInterval(() => port.postMessage({ msg: clock.getFormattedTime(TIME_FORMAT.HH_MM_SS_12) }), 1000);
    setInterval(setClockText, 1000);
}
