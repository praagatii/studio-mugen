# Mugen Studios — Portfolio Page Design

## Overview
A single-page brutalist portfolio for Mugen Studios. Black & white, full-viewport sections, minimal navigation, with hover-triggered video playback on project cards.

## Tech Stack
- Vanilla HTML, CSS, JS — no frameworks
- Google Fonts: Anton (headings), Aileron (subheadings/body)
- All assets are local (no external media dependencies)

## Page Structure (in order)

### 1. Hero
- Full viewport
- Background: `MUGEN.png` centered, cover
- No text — just the logo visual
- No scroll indicator

### 2. What We Do
- Full viewport
- Background: `smoke.png` cover
- Heading (Anton): "Built without limits."
- Subheading (Aileron): "Digital branding, product design, and software systems for Ambitious businesses."

### 3. Portfolio Intro
- Full viewport
- Background: `portfoliobg.png` cover
- Heading (Anton): "Portfolio"
- Subheading (Aileron): "Mugen is a creative studio crafting cinematic digital experiences, immersive branding, and visually driven products. We blend design, storytelling, and technology to create work that feels timeless, atmospheric, and intentional."

### 4. Sriranga Project
- Full viewport
- Background: `stitangamockup.png` cover (default state)
- On hover: fades to `srirangavideo.mp4` playing in a loop (no sound)
- Overlay text (Anton, white, bottom-left): "Sriranga Organics"
- Subtitle (Aileron, smaller, below): "E-Commerce"

### 5. Resolve Project
- Full viewport
- Background: `resolvemockup.png` cover (default state)
- On hover: fades to `resolvelms.mp4` playing in a loop (no sound)
- Overlay text (Anton, white, bottom-left): "Resolve LMS"
- Subtitle (Aileron, smaller, below): "Learning Management System"

### 6. About Us
- Full viewport
- Background: `blackhole.png` cover
- Text (Aileron): "Mugen exists at the intersection of art, technology, and atmosphere. We create experiences that are visually striking, emotionally immersive, and built with a strong sense of identity. Inspired by cinematic storytelling and modern digital culture, our work focuses on making brands and products feel unforgettable."

### 7. Contact (placeholder)
- Minimal section, same full-viewport pattern
- Placeholder text for future contact info

## Navigation
- Fixed top bar, minimalist style
- Links: Hero, What We Do, Portfolio, About Us, Contact
- Smooth scroll anchors to each section
- Aileron font, white text
- Transparent background, slight opacity on scroll

## Visual Style (Brutalist Black & White)
- Black backgrounds, white text
- Thick borders and structural framing where applicable
- No gradients, no colors, no shadows
- Large, bold Anton headings
- Raw, unpolished feel — content-forward
- All sections full viewport (100vh)

## Interaction
- Project sections: image background by default
- Mouse enter: crossfade to video element, play loop
- Mouse leave: crossfade back to image, pause/reset video
- Smooth scroll between sections (CSS scroll-behavior or JS)

## Assets
| File | Section |
|------|---------|
| MUGEN.png | Hero |
| smoke.png | What We Do |
| portfoliobg.png | Portfolio Intro |
| stitangamockup.png | Sriranga (default) |
| srirangavideo.mp4 | Sriranga (hover) |
| resolvemockup.png | Resolve (default) |
| resolvelms.mp4 | Resolve (hover) |
| blackhole.png | About Us |
