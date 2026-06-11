# Mugen Studios Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page brutalist black & white portfolio site for Mugen Studios with 7 full-viewport sections and hover-to-play video project showcases.

**Architecture:** Vanilla HTML/CSS/JS, all sections stacked vertically at 100vh. Each section is a full-viewport block with background images. Project sections use CSS transitions to swap between static mockup and looping video on hover. Minimal fixed nav bar with smooth scroll anchors.

**Tech Stack:** HTML5, CSS3, Vanilla JS, Google Fonts (Anton + Aileron)

**Assets Directory:** `C:\Users\raghu\Desktop\mugen studios\` (all images/video files are local)

---

### Task 1: Create index.html — Full page structure

**Files:**
- Create: `index.html`

- [ ] **Step 1: Write the HTML skeleton with all 7 sections**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mugen Studios</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Aileron:wght@300;400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <nav id="navbar">
    <a href="#hero">Home</a>
    <a href="#whatwedo">What We Do</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>

  <section id="hero" class="section">
    <div class="bg-img" style="background-image: url('MUGEN.png')"></div>
  </section>

  <section id="whatwedo" class="section">
    <div class="bg-img" style="background-image: url('smoke.png')"></div>
    <div class="overlay-content">
      <h1 class="heading">Built without limits.</h1>
      <p class="subheading">Digital branding, product design, and software systems for Ambitious businesses.</p>
    </div>
  </section>

  <section id="portfolio" class="section">
    <div class="bg-img" style="background-image: url('portfoliobg.png')"></div>
    <div class="overlay-content">
      <h1 class="heading">Portfolio</h1>
      <p class="subheading">Mugen is a creative studio crafting cinematic digital experiences, immersive branding, and visually driven products. We blend design, storytelling, and technology to create work that feels timeless, atmospheric, and intentional.</p>
    </div>
  </section>

  <section id="sriranga" class="section project-section">
    <img class="project-img" src="stitangamockup.png" alt="Sriranga Organics">
    <video class="project-video" src="srirangavideo.mp4" muted loop playsinline></video>
    <div class="project-info">
      <h2 class="project-name">Sriranga Organics</h2>
      <p class="project-sub">E-Commerce</p>
    </div>
  </section>

  <section id="resolve" class="section project-section">
    <img class="project-img" src="resolvemockup.png" alt="Resolve LMS">
    <video class="project-video" src="resolvelms.mp4" muted loop playsinline></video>
    <div class="project-info">
      <h2 class="project-name">Resolve LMS</h2>
      <p class="project-sub">Learning Management System</p>
    </div>
  </section>

  <section id="about" class="section">
    <div class="bg-img" style="background-image: url('blackhole.png')"></div>
    <div class="overlay-content">
      <p class="body-text">Mugen exists at the intersection of art, technology, and atmosphere. We create experiences that are visually striking, emotionally immersive, and built with a strong sense of identity. Inspired by cinematic storytelling and modern digital culture, our work focuses on making brands and products feel unforgettable.</p>
    </div>
  </section>

  <section id="contact" class="section">
    <div class="overlay-content">
      <h1 class="heading">Contact</h1>
      <p class="subheading">Coming soon.</p>
    </div>
  </section>

  <script src="script.js"></script>
</body>
</html>
```

---

### Task 2: Create style.css — Brutalist global styles and fonts

**Files:**
- Create: `style.css`

- [ ] **Step 1: Write reset, fonts, and global brutalism styles**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #000;
  color: #fff;
  font-family: 'Aileron', sans-serif;
  font-weight: 300;
}

.heading {
  font-family: 'Anton', sans-serif;
  font-size: 5rem;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 0.02em;
}

.subheading {
  font-size: 1.25rem;
  max-width: 600px;
  margin-top: 1rem;
  line-height: 1.5;
  font-weight: 300;
}

.body-text {
  font-size: 1.1rem;
  max-width: 640px;
  line-height: 1.7;
  font-weight: 300;
}

/* Navigation */
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  gap: 2rem;
  padding: 1.5rem 2.5rem;
  z-index: 100;
  transition: background 0.3s ease;
}

#navbar.scrolled {
  background: rgba(0, 0, 0, 0.85);
}

#navbar a {
  color: #fff;
  text-decoration: none;
  font-family: 'Aileron', sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: opacity 0.2s;
}

#navbar a:hover {
  opacity: 0.6;
}
```

- [ ] **Step 2: Write section, background, and overlay styles**

```css
.section {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-img {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

/* Dark overlay for sections with text */
.section:not(#hero):not(.project-section)::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.overlay-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
}

/* Hero — no overlay, just the image */
#hero .bg-img {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
```

- [ ] **Step 3: Write project section styles (mockup + video hover)**

```css
.project-section .project-img,
.project-section .project-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
}

.project-section .project-video {
  opacity: 0;
}

.project-section:hover .project-img {
  opacity: 0;
}

.project-section:hover .project-video {
  opacity: 1;
}

.project-info {
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  z-index: 2;
}

.project-name {
  font-family: 'Anton', sans-serif;
  font-size: 3rem;
  text-transform: uppercase;
  line-height: 1;
  color: #fff;
}

.project-sub {
  font-family: 'Aileron', sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Contact section */
#contact {
  background: #000;
}

#contact .overlay-content {
  text-align: center;
}
```

---

### Task 3: Create script.js — Navigation scroll effects and hover video

**Files:**
- Create: `script.js`

- [ ] **Step 1: Write nav scroll detection and interactive behaviors**

```javascript
// Navbar background on scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth hover video playback for project sections
document.querySelectorAll('.project-section').forEach(section => {
  const video = section.querySelector('.project-video');

  section.addEventListener('mouseenter', () => {
    video.currentTime = 0;
    video.play();
  });

  section.addEventListener('mouseleave', () => {
    video.pause();
  });
});
```

---

### Task 4: Verify all files exist and page loads correctly

- [ ] **Step 1: Verify all files are in place**

Run:
```powershell
Get-ChildItem -LiteralPath "C:\Users\raghu\Desktop\mugen studios" -Name
```

Expected output includes: `index.html`, `style.css`, `script.js`, plus all asset files.

- [ ] **Step 2: Open in browser**

Open `index.html` in a browser. Verify:
- All 7 sections render at full viewport height
- Navigation bar is visible and fixed at top
- Scroll is smooth between sections
- Nav gets opaque background after scrolling past hero
- Hovering over Sriranga section shows video
- Hovering over Resolve section shows video
- All fonts (Anton, Aileron) load correctly
- All background images display correctly
