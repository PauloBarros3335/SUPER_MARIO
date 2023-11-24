const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const jumpButton = document.getElementById("jumpButton");
const jumpCounter = document.getElementById("jumpCounter");

// const jump = () => {
//   mario.classList.add("jump");

//   setTimeout(() => {
//     mario.classList.remove("jump");
//   }, 400);
// };

let jumps = 0;

const jump = () => {
  mario.classList.add("jump");
  jumps++;
  updateJumpCounter();

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 400);
};

const updateJumpCounter = () => {
  jumpCounter.textContent = `Jumps: ${jumps}`;
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  console.log(marioPosition);

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 90) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
// // document.getElementById("jumpButton").addEventListener("click", jump);
