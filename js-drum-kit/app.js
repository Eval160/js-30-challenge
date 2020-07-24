const allValidKeys = ["q", "s", "d", "f", "g", "h", "j", "k", "l"]

const playSound = (event) => {
  const keyAudio = document.getElementById(event.key)
  // console.log(keyAudio)
  // console.log(keyAudio.querySelector(".sound").innerText.toLowerCase())
  const audioName = keyAudio.querySelector(".sound").innerText.toLowerCase()
  const audio = new Audio(`sound/${audioName}.wav`)
  audio.play()
};

const keySelected = (key) => {
  return document.getElementById(key).classList
};

const addClass = (event) => {
  if (allValidKeys.includes(event.key)) {
    keySelected(event.key).add("played");
    playSound(event);
  }
};

const removeClass = (event) => {
  if (allValidKeys.includes(event.key)) {
    setTimeout(function(){ keySelected(event.key).remove("played") }, 250);
  }
};

document.addEventListener("keydown", addClass);

document.addEventListener("keyup", removeClass);

