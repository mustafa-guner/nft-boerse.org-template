let tl = gsap.timeline()
tl.fromTo(
  ".brand",
  {
    x: -200,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    delay: 0.5,
    duration: 1.3,
  }
)
  .fromTo(
    "nav",
    {
      x: 200,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      delay: 0.5,
      duration: 1.3,
    },
    ">-1.8"
  )
  .fromTo(
    ".info-section h1",
    {
      x: 0,
      y: 100,
      opacity: 0,
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      duration: 1.3,
    }
  )
  .addLabel("h1Show")
  .fromTo(
    ".girl",
    {
      height: 0,
    },
    {
      height: 600,
      duration: 1.4,
      ease: "power2.inOut",
    },
    ">-.5"
  )
  .fromTo(
    ".boy",
    {
      height: 0,
    },
    {
      height: 600,
      duration: 1.4,
      ease: "power2.inOut",
    },
    ">-1"
  )
  .fromTo(
    ".shape1",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "power2.inOut",
    },
    ">-1"
  )
  .fromTo(
    ".shape3",
    {
      opacity: 0,
    },
    {
      opacity: 0.6,
      ease: "power2.inOut",
      duration: 1,
    },
    ">-.2"
  )
  .fromTo(
    ".shape3",
    {
      x: 60,
      y: 440,
    },
    {
      y: 465,
      repeat: -1,
      duration: 1.5,
      ease: "sine.inOut",
      yoyo: true,
    }
  )
  .fromTo(
    ".shape2",
    {
      opacity: 0,
    },
    {
      opacity: 0.3,
      ease: "power2.inOut",
      duration: 1,
    },
    ">-2"
  )
  .fromTo(
    ".shape2",
    {
      x: 550,
      y: -50,
    },
    {
      y: -75,
      repeat: -1,
      duration: 1.5,
      ease: "sine.inOut",
      yoyo: true,
    }
  )
  .fromTo(
    ".info-section h4",
    {
      x: -50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    },
    "h1Show"
  )
  .fromTo(
    ".call-actions",
    {
      x: -50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.3,
    },
    "h1Show+=1"
  );




  //Other animations 

const boxes = gsap.utils.toArray('.box');

// Set things up
gsap.set(boxes, {autoAlpha: 0, y: 50});

boxes.forEach((box, i) => {
  // Set up your animation
  const anim = gsap.to(box, {duration: 1.7, autoAlpha: 1, y: 0, paused: true});
  
  // Use callbacks to control the state of the animation
  ScrollTrigger.create({
    trigger: box,
    end: "bottom bottom",
    once: true,
    onEnter: self => {
      // If it's scrolled past, set the state
      // If it's scrolled to, play it
      self.progress === 1 ? anim.progress(2) : anim.play()
    }
  });
});








