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
    console.log(entry);
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
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenEl = document.querySelectorAll(".hidden");
const hiddenEl1 = document.querySelectorAll(".hidden-1");
const hiddenEl2 = document.querySelectorAll(".hidden-2");
hiddenEl.forEach((el) => observer.observe(el));
hiddenEl1.forEach((el) => observer1.observe(el));
hiddenEl2.forEach((el) => observer2.observe(el));
