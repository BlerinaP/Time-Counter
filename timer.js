
class Timer{
  constructor(durationInput, startButton, pauseButton, callbacks){
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if(callbacks){
      this.onStart = callbacks.onStart;
      this.onComplete = callbacks.onComplete;
      this.onTick = callbacks.onTick;
    }

    this.startButton.addEventListener('click', this.start); //when we click on the button the timer will start counting down
    this.pauseButton.addEventListener('click', this.pause); //when we click on the button the timer will pause counting down
  }

  start = () => {
    if(this.onStart){
      this.onStart(this.timeRemaning);
    }
    this.tick();
    this.interval = setInterval(this.tick, 20);

  };

  pause = () => {
    clearInterval(this.interval);

  }

  tick = () => {
    if(this.timeRemaning <= 0){ // if timeremaining reach 0 time will pause and will not continue to count negative numbers.
      this.pause();
      if(this.onComplete){ // when times complete it calls onComplete function which is in another file Index.js
        this.onComplete();
      }
    } else {
      this.timeRemaning = this.timeRemaning - 0.02; // if time is not completed it will count down minus 0.02 until it reach 0
      if(this.onTick){ // it checks if the time is ticking
        this.onTick(this.timeRemaning);// and will replace the numbers of the function in index.js  with the current timeReamining
      }
    };
    }


  get timeRemaning(){
    return parseFloat(this.durationInput.value); // to accept only numbers
  }

  set timeRemaning(time){
    return this.durationInput.value = time.toFixed(2);//removes the decimals it lets only two decimals of the duration value.
  }

}
