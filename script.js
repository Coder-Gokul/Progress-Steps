const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const submit = document.getElementById("submit");
const msg = document.getElementById("msg");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

submit.addEventListener("click", () => {
  msg.style.display = "block";
 
  update();
});

const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === circles.length) {
    next.disabled = true;
    prev.disabled = false;
    submit.disabled = false;
  } else {
    submit.disabled = true;
    prev.disabled = false;
    next.disabled = false;
  }

  if (currentActive === 1) {
    prev.disabled = true;
    next.disabled = false;
  } 
  if (submit.disabled ) {
    msg.style.display = "none";
  }
};
