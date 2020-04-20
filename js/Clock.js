/**
 * Holds basic system/browser time data
 */
export class Clock {
    constructor(date) {
        this._hh = date.getHours();
        this._mm = date.getMinutes();
        this._ss = date.getSeconds();
        this._pm = this._isPM();
        this._setTime();
        this.getFormattedTime = this.getFormattedTime.bind(this);
        this.logTime = this.logTime.bind(this);
        this.padZeros = this.padZeros.bind(this);
        this._formatTime = this._formatTime.bind(this);
        this.getClock = this.getClock.bind(this);
        this._getClone = this._getClone.bind(this);
        this.getClockData = this.getClockData.bind(this);
        this._isPM = this._isPM.bind(this);
    }
    _setTime() {
        const date = new Date();
        this._hh = date.getHours();
        this._mm = date.getMinutes();
        this._ss = date.getSeconds();
        this._pm = this._isPM();
    }
    _isPM() {
        return this._hh >= 12 ? true : false;
    }
    /**
     * Returns a shallow-copy of specified object
     * @param obj Object to be shallow-copied
     */
    _getClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    _formatTime(format) {
        const rawTime = this.padZeros();
        switch (format) {
            case "HH_MM_SS_12":
                if (this._pm) {
                    rawTime._hh = rawTime._hh === 12 ? rawTime._hh : rawTime._hh - 12;
                    rawTime.period = "PM";
                }
                else {
                    rawTime.period = "AM";
                }
                return `${rawTime._hh}:${rawTime._mm}:${rawTime._ss} ${rawTime.period}`;
            case "HH_MM_12":
                if (this._pm) {
                    rawTime._hh = rawTime._hh === 12 ? rawTime._hh : rawTime._hh - 12;
                    rawTime.period = "PM";
                }
                else {
                    rawTime.period = "AM";
                }
                return `${rawTime._hh}:${rawTime._mm} ${rawTime.period}`;
            case "HH_MM_24":
                return `${rawTime._hh}:${rawTime._mm}`;
        }
        return `${rawTime._hh}:${rawTime._mm}:${rawTime._ss}`;
    }
    padZeros() {
        this._setTime();
        const timeData = this.getClock();
        if (timeData._mm < 10) {
            timeData._mm = "0" + timeData._mm;
        }
        if (timeData._ss < 10) {
            timeData._ss = "0" + timeData._ss;
        }
        return this._getClone(timeData);
    }
    getFormattedTime(format) {
        return this._formatTime(format);
    }
    getClock() {
        return this._getClone(this);
    }
    getClockData() {
        this._setTime();
        return {
            _hh: this._hh,
            _mm: this._mm,
            _ss: this._ss,
            _pm: this._pm
        };
    }
    logTime() {
        this._setTime();
        console.log(`${this._hh}:${this._mm}`);
    }
}
