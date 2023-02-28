
export default class Time {
    // BEGIN (write your solution here)
    static fromString(string) {
      return new Time(Number(string.split(':')[0]), Number(string.split(':')[1]));
    };
    // END
  
    constructor(hours, minutes) {
      this.minutes = minutes;
      this.hours = hours;
    };
  
    toString() {
      return `${this.hours}:${this.minutes}`;
    };
  };