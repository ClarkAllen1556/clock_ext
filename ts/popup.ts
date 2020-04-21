import { Clock } from "./Clock.js";

const clockEL = document.createElement("div");
const placeEL = document.getElementById("time-placeholder");
const clock = new Clock(new Date());
let userSettings : any;

setInterval(sendTime, 500);

async function sendTime() {
    userSettings = await browser.storage.local.get("TIME_FORMAT");
    clockEL.innerText = clock.getFormattedTime(userSettings.TIME_FORMAT);
    placeEL?.appendChild(clockEL);
}
