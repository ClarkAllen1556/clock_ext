import { Clock } from "./Clock.js";
import { TIME_FORMAT } from "./enum.js";
const clockEL = document.createElement("h1");
const clock = new Clock(new Date());
setInterval(() => {
    var _a;
    clockEL.innerText = clock.getFormattedTime(TIME_FORMAT.HH_MM_SS_24);
    window.console.log(clockEL.innerText);
    (_a = document.getElementById("time-placeholder")) === null || _a === void 0 ? void 0 : _a.appendChild(clockEL);
}, 500);
