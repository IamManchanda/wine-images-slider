let counter1 = 0;
let counter2 = 1;
let bool = true;

const progress = document.querySelector(".progress h2");
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const grapesImg = document.querySelector(".grapes-img");
const section1wrapper = document.querySelector(".section-1-wrapper");
const section3wrapper = document.querySelector(".section-3-wrapper");
const section5wrapper = document.querySelector(".section-5-wrapper");

const circleItems = document.querySelectorAll(".circle");
const circles = Array.from(circleItems);

const sectionItems = document.querySelectorAll("section");
const sections = Array.from(sectionItems);

section1wrapper.style.transform = "scale(1)";

function progressCounter() {
  progress.textContent = `${counter2}/${sections.length}`;
  circles.forEach((circle) => {
    circle.style.backgroundColor = "transparent";
  });
  document.querySelector(`.circle-${counter2}`).style.backgroundColor = "#ddd";
}

function pageController() {
  bool = true;

  if (counter1 === 5) {
    sections.forEach((section) => {
      section.style.left = "0";
    });
    counter1 = 0;
    counter2 = 1;
    section1wrapper.style.transform = "scale(1)";
    section5wrapper.style.transform = "scale(1.5)";
    progressCounter();
    bool = false;
  }

  if (counter1 === -1) {
    sections.forEach((section) => {
      if (section.classList[0] === "section-5") {
        return;
      }
      section.style.left = "-100vw";
    });
    counter1 = 4;
    counter2 = 5;
    section1wrapper.style.transform = "scale(1.5)";
    section5wrapper.style.transform = "scale(1)";
    progressCounter();
    bool = false;
  }
  progressCounter();
  return bool;
}

function handleLeftBtn() {
  counter1--;
  counter2--;

  if (pageController()) {
    document.querySelector(`.section-${counter2}`).style.left = "0";
  }

  if (bool) {
    document.querySelector(`.section-${counter2}-wrapper`).style.transform =
      "scale(1)";
    document.querySelector(`.section-${counter2 + 1}-wrapper`).style.transform =
      "scale(1.5)";
  }
}

function handleRightBtn() {
  counter1++;
  counter2++;

  if (pageController()) {
    document.querySelector(`.section-${counter1}`).style.left = "-100vw";
  }

  if (bool) {
    document.querySelector(`.section-${counter2}-wrapper`).style.transform =
      "scale(1)";
    document.querySelector(`.section-${counter1}-wrapper`).style.transform =
      "scale(1.5)";
  }
}

function handleMouseoverGrapesImg() {
  section3wrapper.style.opacity = ".5";
}

function handleMouseoutGrapesImg() {
  section3wrapper.style.opacity = "1";
}

function handleMenuItem() {
  navbar.classList.toggle("change");
}

leftBtn.addEventListener("click", handleLeftBtn);
rightBtn.addEventListener("click", handleRightBtn);
grapesImg.addEventListener("mouseover", handleMouseoverGrapesImg);
grapesImg.addEventListener("mouseout", handleMouseoutGrapesImg);
menu.addEventListener("click", handleMenuItem);
