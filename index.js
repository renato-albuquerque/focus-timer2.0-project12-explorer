//CONSTS

const minutesDisplay = document.querySelector(".play")
const secondsDisplay = document.querySelector(".seconds")
const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonPlus = document.querySelector(".plus")
const buttonMinus = document.querySelector(".minus")
const buttonForest = document.querySelector(".forest")
const buttonRain = document.querySelector(".rain")
const buttonCoffeeShop = document.querySelector(".coffee-shop")
const buttonFirePlace = document.querySelector(".fire-place")

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

const audioForest = new Audio("audios/audio-forest.wav")
const audioRain = new Audio ("audios/audio-rain.wav")
const audioCoffeeShop = new Audio("audios/audio-coffeeshop.wav")
const audioFirePlace = new Audio("audios/audio-fireplace.wav")

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

// FUNCTIONS

function resetControls() {
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
}

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }
  
  function countdown(){
    timerTimeOut = setTimeout(function() {
      let seconds =  Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0 
  
      updateTimerDisplay(minutes, 0)
  
      if (isFinished) {
        resetControls()
        updateTimerDisplay(minutes, seconds)
        timeEnd()
        return
      }
  
      if( seconds <= 0 ) {
        seconds = 60
        --minutes
      }
  
      updateTimerDisplay(minutes, String(seconds - 1))
  
      countdown()
    }, 1000)
  }

function pressButton() {
    buttonPressAudio.play()
  }
  
function timeEnd() {
    kitchenTimer.play()
  }

function soundForest() {
    audioForest.play()
    
}  

function soundRain() {
    audioRain.play()
    
}

function soundCoffeeShop() {
    audioCoffeeShop.play()
    
}

function soundFirePlace() {
    audioFirePlace.play()
    
}

function plus() {
    minutes += 5
    reset()
}

function minus() {
    minutes >= 5 ? minutes -= 5 : minutes = 0
    reset()
}
    

// EVENTS

buttonPlay.addEventListener("click", function() {
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
    
    pressButton()
    countdown()
    
})

buttonPause.addEventListener("click", function() {
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")

    pressButton()
    clearTimeout(timerTimeOut)    
    
})

buttonStop.addEventListener("click", function() {
    resetControls()
    resetTimer()
    pressButton()
})

buttonPlus.addEventListener("click", function() {
    plus()
    pressButton()
})

buttonMinus.addEventListener("click", function() {
    minus()
    pressButton()

})

buttonForest.addEventListener("click", function() {
    
    pressButton()
    soundForest()
    
})

buttonRain.addEventListener("click", function() {
    
    pressButton()
    soundRain()
})

buttonCoffeeShop.addEventListener("click", function() {
    
    pressButton()
    soundCoffeeShop()
    
})

buttonFirePlace.addEventListener("click", function() {
    
    pressButton()
    soundFirePlace()
})
