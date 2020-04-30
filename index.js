
const durationInput = document.querySelector('#duration');  //selecting inputs through id
const startButton = document.querySelector('#start'); //selecting inputs through id
const pauseButton = document.querySelector('#pause'); //selecting inputs through id
const circle = document.querySelector('circle'); //selecting inputs through name

const perimeter = circle.getAttribute('r') * 2 * Math.PI; //calculating the parameter
circle.setAttribute('stroke-dasharray', perimeter); // crating dashs in the green line around the circle

let duration;
const timer = new Timer(durationInput, startButton, pauseButton,{ //creating new instance of the class
  onStart(totalDuration){
    duration = totalDuration;
  },
    onTick(timeRemaining){
      circle.setAttribute('stroke-dashoffset',
      perimeter * timeRemaining / duration - perimeter);

  },
  onComplete(){
    console.log('time completed');
  }

});
