import { Clock } from "./Clock.js";

const clockEL = document.createElement("div");
const placeEL = document.getElementById("time-placeholder");

placeEL?.setAttribute("style", "font-size: 50px");

setInterval(sendTime, 500);

async function sendTime() {
    const userSettings : any = await browser.storage.local.get("TIME_FORMAT");

    const clock = new Clock(new Date());
    clockEL.innerText = clock.getFormattedTime(userSettings.TIME_FORMAT);
    placeEL?.appendChild(clockEL);
}
