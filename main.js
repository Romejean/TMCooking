

gsap.from(".navbar", {duration: 1.5, opacity:0, rotation: 360})

gsap.set(".youtube",{autoAlpha:0});
gsap.to(".youtube", {
    duration :3,
    delay:1.5,
  scale: .95,
  ease: Elastic.easeOut,
  autoAlpha:1,
});

gsap.from(".test", {duration:1.5, scale:0.95,delay:3, opacity:0})

gsap.from(".search", {duration: 1, scale:0.95,y:100,delay:4,opacity:0})
gsap.from(".bottomfooter", {duration: 1, scale:0.95,y:100,delay:4.5,opacity:0}) 