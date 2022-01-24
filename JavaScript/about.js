const tl = gsap.timeline({ defaults: { duration: 1, ease: "sine.out" } });


tl.fromTo('.about-info-container', { x: 1000 }, { x: 0 }, '<10%');

