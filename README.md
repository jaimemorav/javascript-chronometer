# javascript-chronometer
In this exercise I create a Chronometer as an object with methods of start, stop, reset and showtime.

It works with minutes and seconds.

## Chrono

```javascript
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

  reset(){restartTimer => {
      this.seconds = 0;
      this.minutes = 0;
      return this;
      }
  }

  showTime() { document.getElementById("timer").innerText = `${this.minutes}:${this.seconds}`; }

} 
let chrono = new Chronometer;
```
