class Chronometer {
  constructor() {
    this.minutes = 0;
    this.seconds = 0;
    this.id;
  }

  start() {
    this.id = setInterval(() => {
      if (this.seconds == 60) {
        this.seconds = 0;
        this.minutes++;
      } else {
        this.seconds++;
      }
    }, 1000);
  }

  stop() {clearInterval(this.id)}

  reset(){
    this.id = setInterval(() => {
      this.seconds = 0;
      this.minutes = 0;
      if (this.seconds == 60) {
        this.seconds = 0;
        this.minutes++;
      } else {
        this.seconds++;
      }
    }, 1000);
  }

  showTime(){ document.write(`Chronometer: ${this.minutes}:${this.seconds}`);

  }

}
let chrono = new Chronometer();
