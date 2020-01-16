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

  stop() {
    clearInterval(this.id)
  }

  reset() {
    () => {
      this.seconds = 0;
      this.minutes = 0;
      this.showTime();
    }
  }

  showTime() {
    document.getElementById("timer").innerText = `${this.minutes}:${this.seconds}`;
  }

}
let chrono = new Chronometer;