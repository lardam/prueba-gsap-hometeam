document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelectorAll('.p-portfolio-item')

    gsap.fromTo('.portfolio-image-container', {y: 0}, {
        y: '-10vh',
        scrollTrigger: {
            trigger: '#portfolio-wrapper',
            start: 'top top',
            end: () => `+=${window.innerHeight * 9}px`,
            pin: true,
            scrub: true,
        }
    })
    
    gsap.fromTo('.p-portfolio-item', {y: () => `${(items.length * '100')}%`}, {
        y: 0,
        scrollTrigger: {
            trigger: '#portfolio-wrapper',
            start: 'top top',
            end: () => `+=${window.innerHeight * (items.length + 1)}px`,
            scrub: true,
        }
    })

    gsap.fromTo('.n-portfolio-item', {y: 0}, {
        y: () => `${-(items.length * '100')}%`,
        scrollTrigger: {
            trigger: '#portfolio-wrapper',
            start: 'top top',
            end: () => `+=${window.innerHeight * (items.length + 1)}px`,
            scrub: true,
            
        }
    })

    const titles = gsap.utils.toArray('.current-item-text-wrapper')

    gsap.fromTo(titles,{scale: 0}, {
        scale: 1,
        scrollTrigger: {
            trigger: '#portfolio-wrapper',
            start: 'top top',
            end: () => `+=${window.innerHeight * (items.length + 1)}px`,
            scrub: true,
            
        }
    })
});