import { Clock } from "./Clock.js";
import { TIME_FORMAT } from "./enum.js";

const clockEL = document.createElement("h1");
const clock = new Clock(new Date());

setInterval( () => {
  clockEL.innerText = clock.getFormattedTime(TIME_FORMAT.HH_MM_SS_24);

  window.console.log(clockEL.innerText);

  document.getElementById("time-placeholder")?.appendChild(clockEL);
}, 500);

