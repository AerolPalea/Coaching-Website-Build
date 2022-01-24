const tl = gsap.timeline({ defaults: { duration: 1.5, ease: "sine.out" } });



tl.fromTo('.welcome-text', { x: 1000 }, { x: 0 }, '<10%');


