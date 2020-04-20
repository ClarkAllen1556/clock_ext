import { TIME_FORMAT } from "./enum.js";

/**
 * Holds basic system/browser time data
 */
export class Clock {
  private _hh : number;
  private _mm : number;
  private _ss : number;
  private _pm : boolean;

  constructor(date : Date) {
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

  private _setTime() : void {
    const date = new Date();

    this._hh = date.getHours();
    this._mm = date.getMinutes();
    this._ss = date.getSeconds();
    this._pm = this._isPM();
  }

  private _isPM() {
    return this._hh >= 12 ? true : false;
  }

  /**
   * Returns a shallow-copy of specified object
   * @param obj Object to be shallow-copied
   */
  private _getClone(obj: object): any {
    return JSON.parse(JSON.stringify(obj));
  }

  private _formatTime(format : TIME_FORMAT) : string {
    const rawTime = this.padZeros();

    switch (format) {
      case TIME_FORMAT.HH_MM_SS_12:
        if (this._pm) {
          rawTime._hh = rawTime._hh === 12 ? rawTime._hh : rawTime._hh - 12;
          rawTime.period = "_pm";
        } else {
          rawTime.period = "AM";
        }
        return `${rawTime._hh}:${rawTime._mm}:${rawTime._ss} ${rawTime.period}`;
      default:
    }

    return `${rawTime._hh}:${rawTime._mm}:${rawTime._ss}`;
  }

  public padZeros() : any {
    this._setTime();

    const timeData : any = this.getClock();

    if (timeData._mm < 10) {
      timeData._mm = "0" + timeData._mm;
    }
    if (timeData._ss < 10) {
      timeData._ss = "0" + timeData._ss;
    }

    return this._getClone(timeData);
  }

  public getFormattedTime(format : TIME_FORMAT) : string {
    return this._formatTime(format);
  }

  public getClock() : object {
    return this._getClone(this);
  }

  public getClockData()  {
    this._setTime();

    return {
      _hh: this._hh,
      _mm: this._mm,
      _ss: this._ss,
      _pm: this._pm
    }
  }

  public logTime(): void {
    this._setTime();

    console.log(`${this._hh}:${this._mm}`)
  }
}