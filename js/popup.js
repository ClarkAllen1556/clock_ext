import { Clock } from "./Clock.js";
import { TIME_FORMAT } from "./enum.js";
let fil = document.createElement("h1");
let clock = new Clock(new Date());
setInterval(() => {
    var _a;
    fil.innerText = clock.getFormattedTime(TIME_FORMAT.HH_MM_SS_24);
    window.console.log(fil.innerText);
    (_a = document.getElementById("time-placeholder")) === null || _a === void 0 ? void 0 : _a.appendChild(fil);
}, 500);
