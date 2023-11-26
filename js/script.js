const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const jumpButton = document.getElementById("jumpButton");
const jumpCounter = document.getElementById("jumpCounter");

let isJumping = false;
let jumps = 0;

const jump = () => {
  if (!isJumping) {
    isJumping = true;
    mario.classList.add("jump");
    jumps++;
    updateJumpCounter();

    setTimeout(() => {
      mario.classList.remove("jump");
      isJumping = false;
    }, 400);
  }
};

jumpButton.addEventListener("touchstart", jump);

const updateJumpCounter = () => {
  jumpCounter.textContent = `Jumps: ${jumps}`;
};

const loop = () => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  console.log(marioPosition);

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 50) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    cancelAnimationFrame(loop);
  } else {
    requestAnimationFrame(loop);
  }
};

loop();
