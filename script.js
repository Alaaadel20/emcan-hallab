// /////////////////////////////////////////////////////////////////////

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  btnNavEl.classList.toggle("btn-open");
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

const hiddenEl = document.querySelectorAll(".hidden");
const hiddenEl1 = document.querySelectorAll(".hidden-1");
const hiddenEl2 = document.querySelectorAll(".hidden-2");
hiddenEl.forEach((el) => observer.observe(el));
hiddenEl1.forEach((el) => observer1.observe(el));
hiddenEl2.forEach((el) => observer2.observe(el));

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

tabMenu.addEventListener("click", () => {
  console.log(tabMenu);
});
