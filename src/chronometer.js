class Chronometer {
  constructor() {
     this.currentTime = 0
    this.intervalId = null
    // ... your code goes here
  }

  start(printTimeCallback) {
 if(printTimeCallback){
  this.intervalId = setInterval( () =>{
    this.currentTime = this.currentTime +1;
    printTimeCallback();
  } , 1000)
 }else{
  this.intervalId = setInterval(() => {
    this.currentTime = this.currentTime +1;
  }, 1000 );
 }
    
  // ... your code goes here
  }

  getMinutes() {
   let minutes = 0
    minutes = currentTime / 60
    return Math.floor(minutes)
    // ... your code goes here
  }

  getSeconds() {
   let seconds = 0
   seconds += currentTime % 60
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
