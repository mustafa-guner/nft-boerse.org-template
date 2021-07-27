const steps = gsap.utils.toArray('.step');

// Set things up
gsap.set(steps, {autoAlpha: 0, y: 50});

steps.forEach((box, i) => {
  // Set up your animation
  const anim = gsap.to(box, {duration: 1.2, autoAlpha: 1, y: 0, paused: true});
  
  // Use callbacks to control the state of the animation
  ScrollTrigger.create({
    trigger: box,
    end: "top",
    once: true,
    onEnter: self => {
      // If it's scrolled past, set the state
      // If it's scrolled to, play it
      self.progress === 1 ? anim.progress(2) : anim.play()
    }
  });
});

// set height of the svg path as constant
const svg = document.getElementById("svgPath");
const length = svg.getTotalLength();

// start positioning of svg drawing
svg.style.strokeDasharray = length;

// hide svg before scrolling starts
svg.style.strokeDashoffset = length;




window.addEventListener("scroll", function () {
  const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  const draw = length * scrollpercent;

  // Reverse the drawing when scroll upwards
  svg.style.strokeDashoffset = length - draw;
});
