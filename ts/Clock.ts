import { TIME_FORMAT } from "./enum.js";

/**
 * Holds basic system/browser time data
 */
export class Clock {
  private hh : number;
  private mm : number;
  private ss : number;
  private pm : boolean;

  constructor(date : Date) {
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
    this.isPM = this.isPM.bind(this);
  }

  private setTime() : void {
    let date = new Date();

    this.hh = date.getHours();
    this.mm = date.getMinutes();
    this.ss = date.getSeconds();
    this.pm = this.isPM();
  }

  private isPM() {
    if (this.hh >= 12) {
      return true;
    }

    return false;
  }

  private formatTime(format : TIME_FORMAT) : string {
    let rawTime = this.padZeros();

    switch (format) {
      case TIME_FORMAT.HH_MM_SS_12:
        if(this.pm) {
          rawTime.hh = rawTime.hh == 12 ? rawTime.hh : rawTime.hh - 12;
          rawTime.period = "PM";
        } else {
          rawTime.period = "AM";
        }
        return `${rawTime.hh}:${rawTime.mm}:${rawTime.ss} ${rawTime.period}`;
      default:
    }

    return `${rawTime.hh}:${rawTime.mm}:${rawTime.ss}`;
  }

  public padZeros() : any {
    this.setTime();

    let timeData : any = this.getClock();

    if(timeData.mm < 10) {
      timeData.mm = "0" + timeData.mm;
    }
    if(timeData.ss < 10) {
      timeData.ss = "0" + timeData.ss;
    }

    return this.getClone(timeData);
  }

  public getFormattedTime(format : TIME_FORMAT) : string {
    return this.formatTime(format);
  }

  public getClock() : any {
    return this.getClone(this);
  }

  public logTime(): void {
    console.log(`${this.hh}:${this.mm}`)
  }

  /**
   * Returns a shallow copy of the Clock object
   */
  private getClone(obj : object) : any {
    return JSON.parse(JSON.stringify(obj));
  }
}