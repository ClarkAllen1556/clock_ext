import { TIME_FORMAT } from "./enum.js";
/**
 * Holds basic system/browser time data
 */
export class Clock {
    constructor(date) {
        this.hh = date.getHours();
        this.mm = date.getMinutes();
        this.ss = date.getSeconds();
        this.pm = this.isPM();
        this.setTime();
        this.getFormattedTime = this.getFormattedTime.bind(this);
        this.logTime = this.logTime.bind(this);
        this.padZeros = this.padZeros.bind(this);
        this.formatTime = this.formatTime.bind(this);
        this.getClock = this.getClock.bind(this);
        this.getClone = this.getClone.bind(this);
        this.getClockData = this.getClockData.bind(this);
        this.isPM = this.isPM.bind(this);
    }
    setTime() {
        const date = new Date();
        this.hh = date.getHours();
        this.mm = date.getMinutes();
        this.ss = date.getSeconds();
        this.pm = this.isPM();
    }
    isPM() {
        return this.hh >= 12 ? true : false;
    }
    formatTime(format) {
        const rawTime = this.padZeros();
        switch (format) {
            case TIME_FORMAT.HH_MM_SS_12:
                if (this.pm) {
                    rawTime.hh = rawTime.hh === 12 ? rawTime.hh : rawTime.hh - 12;
                    rawTime.period = "PM";
                }
                else {
                    rawTime.period = "AM";
                }
                return `${rawTime.hh}:${rawTime.mm}:${rawTime.ss} ${rawTime.period}`;
            default:
        }
        return `${rawTime.hh}:${rawTime.mm}:${rawTime.ss}`;
    }
    padZeros() {
        this.setTime();
        const timeData = this.getClock();
        if (timeData.mm < 10) {
            timeData.mm = "0" + timeData.mm;
        }
        if (timeData.ss < 10) {
            timeData.ss = "0" + timeData.ss;
        }
        return this.getClone(timeData);
    }
    getFormattedTime(format) {
        return this.formatTime(format);
    }
    getClock() {
        return this.getClone(this);
    }
    getClockData() {
        this.setTime();
        return {
            hh: this.hh,
            mm: this.mm,
            ss: this.ss,
            pm: this.pm
        };
    }
    logTime() {
        this.setTime();
        console.log(`${this.hh}:${this.mm}`);
    }
    /**
     * Returns a shallow copy of the Clock object
     */
    getClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
}
