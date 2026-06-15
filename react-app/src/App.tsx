import { useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import DotBackground from './components/background/DotBackground'
import Grain from './components/atmosphere/Grain'
import LightLeak from './components/atmosphere/LightLeak'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import LoadingScreen from './components/LoadingScreen'
import bgWatermark from './assets/mugen-bg-watermark.png'

export default function App() {
  const [appReady, setAppReady] = useState(false)

  return (
    <HelmetProvider>
      <LoadingScreen onComplete={() => setAppReady(true)} />

      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Navbar loaded={appReady} />

        <img
          src={bgWatermark}
          alt=""
          aria-hidden
          className="fixed pointer-events-none select-none"
          style={{
            zIndex: 0,
            inset: 0,
            width: '180vw',
            height: '180vh',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            opacity: 0.4,
            mixBlendMode: 'screen',
          }}
        />
        <DotBackground />
        <Grain />
        <LightLeak />

        <div
          style={{
            opacity: appReady ? 1 : 0,
            transition: 'opacity 0.8s ease',
            pointerEvents: appReady ? 'auto' : 'none',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}
