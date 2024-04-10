// Select the cursor and blur elements
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

// Listen for mouse movement
document.addEventListener("mousemove", function (event) {
  // Set the position of the cursor to match the mouse coordinates
  crsr.style.left = event.clientX + "px";
  crsr.style.top = event.clientY + "px";

  // Set the position of the blur effect relative to the mouse coordinates
  blur.style.left = event.clientX - 250 + "px";
  blur.style.top = event.clientY - 250 + "px";
});

// Scroll Trigger for navigation background color change
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

// Scroll Trigger for main background color change
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -30%",
    end: "top -100%",
    scrub: 10,
  },
});

// Cursor effects for navigation items
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

// Scroll Trigger animations
gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
