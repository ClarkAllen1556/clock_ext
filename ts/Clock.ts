import { TIME_FORMAT } from "./enum.js";

/**
 * Holds basic system/browser time data
 */
export class Clock {
  private hh : number;
  private mm : number;
  private ss : number;

  constructor(date : Date) {
    this.hh = date.getHours();
    this.mm = date.getMinutes();
    this.ss = date.getSeconds();
    this.setTime();

    this.getFormattedTime = this.getFormattedTime.bind(this);
    this.logTime = this.logTime.bind(this);
    this.setTime = this.setTime.bind(this);
    this.clockStringify = this.clockStringify.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }

  private setTime() : void {
    let date = new Date();

    this.hh = date.getHours();
    this.mm = date.getMinutes();
    this.ss = date.getSeconds();
  }

  private formatTime(format : TIME_FORMAT) : string {
    this.setTime();

    let fTime = JSON.parse(this.clockStringify());

    if(fTime.mm < 10) {
      fTime.mm = "0" + fTime.mm;
    }
    if(fTime.ss < 10) {
      fTime.ss = "0" + fTime.ss;
    }

    return `${fTime.hh}:${fTime.mm}:${fTime.ss}`;
  }

  public clockStringify() : string {
    this.setTime();

    const timeData = {
      hh : this.hh,
      mm : this.mm,
      ss : this.ss,
    };

    return JSON.stringify(timeData);
  }

  public logTime() : void {
    console.log(`${this.hh}:${this.mm}`)
  }

  public getFormattedTime(format : TIME_FORMAT) : string {
    switch(format) {
      case TIME_FORMAT.HH_MM_SS_12:
      case TIME_FORMAT.HH_MM_SS_24:
        return this.formatTime(format);
      break;
      case TIME_FORMAT.HH_MM_12:
      case TIME_FORMAT.HH_MM_24:
      default:
        return this.formatTime(format);
   }
  }
}