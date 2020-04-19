// import { Clock } from "./Clock";

import { Clock } from "./Clock.js";
import { TIME_FORMAT } from "./enum.js";
import $ from "jquery";

// background-script.js
let clock = new Clock(new Date());

browser.browserAction.onClicked.addListener(openPopup);

browser.runtime.onConnect.addListener(portConnected);

function openPopup() {
  browser.browserAction.openPopup();
}

function setClockText() {
  browser.browserAction.setBadgeText({ text: clock.getFormattedTime(TIME_FORMAT.HH_MM_SS_24) });
  browser.browserAction.setTitle({ title: clock.getFormattedTime(TIME_FORMAT.HH_MM_SS_24) });
}

function portConnected(port: browser.runtime.Port) {
  port.postMessage({ msg: `BACKGROUND SCRIPT MESSAGE RECEIVED : ${ clock.getFormattedTime(TIME_FORMAT.HH_MM_SS_24) } >> `});

  setInterval( () => port.postMessage({ msg: clock.getFormattedTime(TIME_FORMAT.HH_MM_SS_12) }), 1000);
  setInterval(setClockText, 1000);
}