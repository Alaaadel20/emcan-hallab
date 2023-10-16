// /////////////////////////////////////////////////////////////////////

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const btnEl = document.querySelectorAll(".underlinez");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");

  btnNavEl.classList.toggle("btn-open");
});
btnEl.forEach((btn) => {
  btn.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });
});

/////////////////////////////////////////////////////////////////////////
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-1");
    } else {
      entry.target.classList.remove("show-1");
    }
  });
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-2");
    } else {
      entry.target.classList.remove("show-2");
    }
  });
});
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-3");
    } else {
      entry.target.classList.remove("show-3");
    }
  });
});
const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-4");
    } else {
      entry.target.classList.remove("show-4");
    }
  });
});

const hiddenEl = document.querySelectorAll(".hidden");
const hiddenEl1 = document.querySelectorAll(".hidden-1");
const hiddenEl2 = document.querySelectorAll(".hidden-2");
const hiddenEl3 = document.querySelectorAll(".hidden-3");
const hiddenEl4 = document.querySelectorAll(".hidden-4");
hiddenEl.forEach((el) => observer.observe(el));
hiddenEl1.forEach((el) => observer1.observe(el));
hiddenEl2.forEach((el) => observer2.observe(el));
hiddenEl3.forEach((el) => observer3.observe(el));
hiddenEl4.forEach((el) => observer4.observe(el));
////////////////////////////////////////////////////////
const tabs = document.querySelectorAll(".tab");
const tabBtns = document.querySelectorAll(".tab-btn");

const tab_Nav = function (tabBtnClick) {
  tabBtns.forEach((tabBtn) => {
    tabBtn.classList.remove("active");
  });
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  tabBtns[tabBtnClick].classList.add("active");
  tabs[tabBtnClick].classList.add("active");
};

tabBtns.forEach((tabBtn, i) => {
  tabBtn.addEventListener("click", () => {
    tab_Nav(i);
  });
});
////////////////////////////////////////////////////////////////////////
const tabMenu = document.querySelector(".tab-menu");

let activeDrag = false;
tabMenu.addEventListener("mousemove", (drag) => {
  if (!activeDrag) return;
  tabMenu.scrollLeft -= drag.movementX;
});

tabMenu.addEventListener("mouseup", () => {
  activeDrag = false;
  console.log(2);
});
tabMenu.addEventListener("mousedown", () => {
  console.log(3);
  activeDrag = true;
});

/////////////////////////////////////////////////////////////
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const targetSection = document.getElementById("story");
  const scrollPosition = window.scrollY;
  const sectionOffsetTop = targetSection.offsetTop;
  const sectionOffsetBottom = targetSection.offsetBottom;
  if (
    scrollPosition >= sectionOffsetTop ||
    scrollPosition >= sectionOffsetTop
  ) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// window.addEventListener("scroll", function () {
//   const header = document.getElementById("header");
//   const targetSectionCatering = document.getElementById("catering");
//   const scrollPosition = window.scrollY;
//   const sectionOffsetTop = targetSectionCatering.offsetTop;
//   console.log(scrollPosition);
//   if (scrollPosition >= sectionOffsetTop) {
//     header.classList.remove("scrolled");
//   }
// });
// window.addEventListener("scroll", function () {
//   const header = document.getElementById("header");
//   const targetSection = document.getElementById("footer");
//   const scrollPosition = window.scrollY;
//   const sectionOffsetTop = targetSection.offsetTop;
//   const sectionOffsetBottom = targetSection.offsetBottom;
//   if (scrollPosition >= sectionOffsetTop) {
//     header.classList.add("scrolled");
//   }
// });
/////////////////////////////////////////////////////////////////////////////////
const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");

function openFullImg(pic) {
  fullImgBox.style.display = "block";
  fullImg.src = pic;
  console.log(77777);
}

function closeFullImg() {
  fullImgBox.style.display = "none";
}

let gallery = document.querySelector(".gallery-1");
let currentTab = document.querySelector(".btn-gallery").innerHTML;
let currentTabBtn1 = document.querySelector(".btn1");
let currentTabBtn2 = document.querySelector(".btn2");
let currentTabBtn3 = document.querySelector(".btn3");
let prevButton = document.getElementById("prevButton");
let nextButton = document.getElementById("nextButton");
currentTabBtn1.addEventListener("click", () => {
  currentTab = currentTabBtn1.innerHTML;
  console.log(currentTab);
});
currentTabBtn2.addEventListener("click", () => {
  currentTab = currentTabBtn2.innerHTML;
  console.log(currentTab);
});
currentTabBtn3.addEventListener("click", () => {
  currentTab = currentTabBtn3.innerHTML;
  console.log(currentTab);
});

const images1 = [
  "./imgs/gallery-1/1.jpg",
  "./imgs/gallery-1/2.jpg",
  "./imgs/gallery-1/3.jpg",
  "./imgs/gallery-1/4.jpg",
  "./imgs/gallery-1/5.jpg",
  "./imgs/gallery-1/6.jpg",
];
const images2 = [
  "./imgs/gallery-2/1.jpg",
  "./imgs/gallery-2/2.jpg",
  "./imgs/gallery-2/3.jpg",
  "./imgs/gallery-2/4.jpg",
  "./imgs/gallery-2/5.jpg",
  "./imgs/gallery-2/6.jpg",
];
const images3 = [
  "./imgs/gallery-3/1.jpg",
  "./imgs/gallery-3/2.jpg",
  "./imgs/gallery-3/3.jpg",
  "./imgs/gallery-3/4.jpg",
  "./imgs/gallery-3/5.jpg",
  "./imgs/gallery-3/6.jpg",
];
let currentIndex = 0;
console.log(currentTab);
let images;
prevButton.addEventListener("click", () => {
  if (currentTab == "FOOD") {
    images = images1;
  }
  if (currentTab == "SWEETS") {
    images = images2;
  }
  if (currentTab == "RESTAURANT") {
    images = images3;
  }
  currentIndex = (currentIndex + 1 + images.length) % images.length;
  updateImage();
});
nextButton.addEventListener("click", () => {
  if (currentTab == "FOOD") {
    images = images1;
  }
  if (currentTab == "SWEETS") {
    images = images2;
  }
  if (currentTab == "RESTAURANT") {
    images = images3;
  }
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
  console.log(currentTab);
});
function updateImage() {
  if (currentTab == "FOOD") {
    images = images1;
  }
  if (currentTab == "SWEETS") {
    images = images2;
  }
  if (currentTab == "RESTAURANT") {
    images = images3;
  }
  fullImg.src = images[currentIndex];
}
