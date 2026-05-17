const lenis = new Lenis({ duration: 1.2, smoothWheel: true });

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) lenis.scrollTo(target, { offset: -60 });
  });
});

const cursorVideo = document.createElement('video');
cursorVideo.id = 'cursor-video';
cursorVideo.muted = true;
cursorVideo.loop = true;
cursorVideo.playsInline = true;
cursorVideo.preload = 'auto';
document.body.appendChild(cursorVideo);

let currentSection = null;

document.querySelectorAll('.project-section').forEach(section => {
  const vidEl = section.querySelector('.project-video');
  if (!vidEl) return;
  const videoSrc = vidEl.getAttribute('src');

  section.addEventListener('mouseenter', () => {
    if (!videoSrc) return;
    currentSection = section;
    gsap.killTweensOf(cursorVideo);
    gsap.set(cursorVideo, { opacity: 0 });
    cursorVideo.src = videoSrc;
    cursorVideo.currentTime = 0;
    cursorVideo.load();
    cursorVideo.play().then(() => {
      gsap.to(cursorVideo, { opacity: 1, duration: 2, ease: 'power2.out' });
    }).catch(() => {});
  });

  section.addEventListener('mousemove', (e) => {
    if (currentSection !== section) return;
    cursorVideo.style.left = (e.clientX + 20) + 'px';
    cursorVideo.style.top = (e.clientY + 20) + 'px';
  });

  section.addEventListener('mouseleave', () => {
    currentSection = null;
    gsap.killTweensOf(cursorVideo);
    gsap.to(cursorVideo, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => { cursorVideo.pause(); cursorVideo.src = ''; }
    });
  });
});
