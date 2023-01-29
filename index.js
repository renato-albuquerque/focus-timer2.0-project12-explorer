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

// FUNCTIONS

function resetControls() {
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
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

// EVENTS

buttonPlay.addEventListener("click", function() {
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")

    pressButton()
})

buttonPause.addEventListener("click", function() {
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")

    pressButton()
})

buttonStop.addEventListener("click", function() {
    resetControls()
    pressButton()
})

buttonPlus.addEventListener("click", function() {
    minutesDisplay + 5

    pressButton()
})

buttonMinus.addEventListener("click", function() {

    pressButton()

})

buttonForest.addEventListener("click", function() {
    
    soundForest()
})

buttonRain.addEventListener("click", function() {
    
    soundRain()
})

buttonCoffeeShop.addEventListener("click", function() {
    
    soundCoffeeShop()
    
})

buttonFirePlace.addEventListener("click", function() {
    
    soundFirePlace()
})
