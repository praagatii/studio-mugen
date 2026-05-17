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
let leaveTimeout;

document.querySelectorAll('.project-section').forEach(section => {
  const vidEl = section.querySelector('.project-video');
  if (!vidEl) return;
  const videoSrc = vidEl.getAttribute('src');

  section.addEventListener('mouseenter', () => {
    if (!videoSrc) return;
    clearTimeout(leaveTimeout);
    currentSection = section;
    cursorVideo.src = videoSrc;
    cursorVideo.currentTime = 0;
    cursorVideo.load();
    cursorVideo.play().catch(() => {});
    cursorVideo.style.transition = 'none';
    cursorVideo.style.opacity = '0';
    requestAnimationFrame(() => {
      cursorVideo.style.transition = 'opacity 2s ease';
      cursorVideo.style.opacity = '1';
    });
  });

  section.addEventListener('mousemove', (e) => {
    if (currentSection !== section) return;
    cursorVideo.style.left = (e.clientX + 20) + 'px';
    cursorVideo.style.top = (e.clientY + 20) + 'px';
  });

  section.addEventListener('mouseleave', () => {
    currentSection = null;
    cursorVideo.style.transition = 'opacity 0.3s ease';
    cursorVideo.style.opacity = '0';
    leaveTimeout = setTimeout(() => { cursorVideo.pause(); cursorVideo.src = ''; }, 300);
  });
});

// Mobile
if (window.matchMedia('(max-width: 768px)').matches) {
  document.querySelectorAll('.project-section .project-video').forEach(video => {
    video.setAttribute('playsinline', '');
    video.preload = 'auto';
  });

  // Show the current section's video as PiP immediately
  const showPip = () => {
    const sections = document.querySelectorAll('.project-section');
    let found = false;
    sections.forEach(s => {
      const video = s.querySelector('.project-video');
      if (!video) return;
      const rect = s.getBoundingClientRect();
      if (!found && rect.top < window.innerHeight && rect.bottom > 0) {
        video.style.cssText = 'position:fixed!important;bottom:1rem;left:1rem;width:160px;height:90px;z-index:999;border-radius:6px;pointer-events:none;object-fit:cover;background:#000;opacity:1!important';
        video.play().catch(() => {});
        found = true;
      } else {
        video.style.cssText = 'position:absolute;opacity:0;pointer-events:none;width:1px;height:1px';
      }
    });
  };

  showPip();
  document.addEventListener('scroll', showPip, { passive: true });
  document.addEventListener('touchstart', () => {
    document.querySelector('.project-section .project-video[style*="fixed"]')?.play().catch(() => {});
  }, { once: true });
}
