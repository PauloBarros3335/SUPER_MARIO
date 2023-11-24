// const mario = document.querySelector(".mario");
// const pipe = document.querySelector(".pipe");
// const jumpButton = document.getElementById("jumpButton");
// const jumpCounter = document.getElementById("jumpCounter");

// let isJumping = false;
// let jumps = 0;

// const jump = () => {
//   if (!isJumping) {
//     isJumping = true;
//     mario.classList.add("jump");
//     jumps++;
//     updateJumpCounter();

//     setTimeout(() => {
//       mario.classList.remove("jump");
//       isJumping = false;
//     }, 400);
//   }
// };

// jumpButton.addEventListener("click", jump);

// const updateJumpCounter = () => {
//   jumpCounter.textContent = `Jumps: ${jumps}`;
// };

// const loop = setInterval(() => {
//   const pipePosition = pipe.offsetLeft;
//   const marioPosition = +window
//     .getComputedStyle(mario)
//     .bottom.replace("px", "");

//   console.log(marioPosition);

//   if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
//     pipe.style.animation = "none";
//     pipe.style.left = `${pipePosition}px`;

//     mario.style.animation = "none";
//     mario.style.bottom = `${marioPosition}px`;

//     mario.src = "./images/game-over.png";
//     mario.style.width = "75px";
//     mario.style.marginLeft = "50px";

//     clearInterval(loop);
//   }
// }, 10);

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

jumpButton.addEventListener("touchstart", jump); // Usar touchstart em vez de click

const updateJumpCounter = () => {
  jumpCounter.textContent = `Jumps: ${jumps}`;
};

const loop = () => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  console.log(marioPosition);

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    cancelAnimationFrame(loop); // Para a animação
  } else {
    requestAnimationFrame(loop); // Continua a animação
  }
};

loop(); // Inicia o loop principal

// // document.addEventListener("keydown", jump);
// document.getElementById("jumpButton").addEventListener("click", jump);
