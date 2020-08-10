const buttonPlay = document.querySelector(".toggle");
const video = document.querySelector(".player__video");
const progressFilled = document.querySelector(".progress__filled")
const progressBar = document.querySelector(".progress")
const skipButtons = document.querySelectorAll("button[data-skip]");
const ranges = document.querySelectorAll("[name]");

const togglePlay = () => video.paused ? video.play() : video.pause();
const updateIconPlay = () => buttonPlay.innerText = video.paused ? "❚ ❚" : "►";
const skip = e => video.currentTime += Number(e.target.dataset.skip);
const updateRange = e => video[e.target.name] = e.target.valueAsNumber
const handleProgressFilled = () => {
  const progressPercent = (video.currentTime/ video.duration) * 100;
  progressFilled.style.flexBasis = `${progressPercent}%`;
};
const scrub = (event) => {
  const scrubTime = video.duration * event.offsetX / progressBar.offsetWidth;
  video.currentTime = scrubTime;
};

buttonPlay.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

video.addEventListener("play", updateIconPlay);
video.addEventListener("pause", updateIconPlay);
video.addEventListener("timeupdate", handleProgressFilled);

skipButtons.forEach(button => button.addEventListener("click", skip));

ranges.forEach(range => range.addEventListener("change", updateRange));
ranges.forEach(range => range.addEventListener("mousemove", updateRange));

let mousedown = false
progressBar.addEventListener("click", scrub)
progressBar.addEventListener("mousemove", e => mousedown && scrub(e));
progressBar.addEventListener("mousedown", () => mousedown = true);
progressBar.addEventListener("mouseup", () => mousedown = false);
