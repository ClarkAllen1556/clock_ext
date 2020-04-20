var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Clock } from "./Clock.js";
const clockEL = document.createElement("div");
const placeEL = document.getElementById("time-placeholder");
placeEL === null || placeEL === void 0 ? void 0 : placeEL.setAttribute("style", "font-size: 50px");
setInterval(sendTime, 500);
function sendTime() {
    return __awaiter(this, void 0, void 0, function* () {
        const userSettings = yield browser.storage.local.get("TIME_FORMAT");
        const clock = new Clock(new Date());
        clockEL.innerText = clock.getFormattedTime(userSettings.TIME_FORMAT);
        placeEL === null || placeEL === void 0 ? void 0 : placeEL.appendChild(clockEL);
    });
}
