document.addEventListener('DOMContentLoaded', () => {
    // Hero Section Animation
    gsap.from('.hero-title', { duration: 1, y: -50, opacity: 0 });
    gsap.from('.hero-subtitle', { duration: 1, y: 50, opacity: 0, delay: 0.3 });
    gsap.from('.hero-button', { duration: 1, scale: 0.5, opacity: 0, delay: 0.6, ease: "back" });
    gsap.from('.hero-image img', { duration: 1, x: 100, opacity: 0, delay: 0.3 });

    // Scroll-Triggered Animations
    const contentItems = document.querySelectorAll('.content-item');

    contentItems.forEach(item => {
        const animationType = item.dataset.animation;
        let animationConfig = {
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
            opacity: 1,
            duration: 1,
        };

        switch (animationType) {
            case 'fade-in':
                break; // Default opacity change is enough
            case 'slide-left':
                animationConfig.x = -100;
                break;
            case 'scale-up':
                animationConfig.scale = 1.2;
                break;
            default:
                break;
        }

        gsap.from(item, animationConfig);
    });
});