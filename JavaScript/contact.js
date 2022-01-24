// Animation slide in
const tl = gsap.timeline({ defaults: { duration: 1, ease: "sine.out" } });
tl.fromTo('.form', { x: 1000 }, { x: 0 }, '<10%');

// Form results
