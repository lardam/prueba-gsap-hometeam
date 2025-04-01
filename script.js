document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    
    const wrapper = document.getElementById("castle-wrapper");
    const dataContainer = document.getElementById('data-container')
    const castleContainer = document.getElementById("castle-container");

    gsap.fromTo(dataContainer, {
        top: 0
    }, {
        top: '400vh',
        scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            scrub: true,
            markers: true
        }
    })
});