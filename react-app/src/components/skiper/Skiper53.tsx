import { AnimatePresence, motion } from "framer-motion"
import { useState, useCallback } from "react"
import srirangaImg from "../../assets/sriranga.png"
import resolveImg from "../../assets/resolvemockup.png"
import bangloreImg from "../../assets/banglore.png"
import blind75Img from "../../assets/blind75.png"
import rutamImg from "../../assets/rutam.png"
import miraiImg from "../../assets/mirai.png"

const images = [
  { src: srirangaImg, alt: "Sriranga Organics", code: "# 01" },
  { src: resolveImg, alt: "Resolve LMS", code: "# 02" },
  { src: bangloreImg, alt: "Bengaluru Central", code: "# 03" },
  { src: blind75Img, alt: "Blind 75", code: "# 04" },
  { src: rutamImg, alt: "Rutam", code: "# 05" },
  { src: miraiImg, alt: "Mirai", code: "# 06" },
]

export default function Skiper53({ className }: { className?: string }) {
  const [activeImage, setActiveImage] = useState<number | null>(1)

  const handleHover = useCallback(
    (index: number) => {
      if (activeImage !== index) setActiveImage(index)
    },
    [activeImage],
  )

  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center gap-1.5">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-2xl"
            style={{
              width: "clamp(180px, 20vw, 320px)",
              background: "#000",
            }}
            animate={{ height: activeImage === index ? "clamp(180px, 18vw, 300px)" : "2.5rem" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            onClick={() => handleHover(index)}
            onMouseEnter={() => handleHover(index)}
            layout
          >
            <AnimatePresence mode="sync">
              {activeImage === index && (
                <motion.div
                  key="gradient"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  style={{ zIndex: 1 }}
                />
              )}
            </AnimatePresence>
            <AnimatePresence mode="sync">
              {activeImage === index && (
                <motion.div
                  key="label"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-0 right-0 px-3 pb-3"
                  style={{ zIndex: 2 }}
                >
                  <p className="text-xs text-white/40">{image.code}</p>
                </motion.div>
              )}
            </AnimatePresence>
            <img
              src={image.src}
              className="size-full object-cover"
              alt={image.alt}
              draggable={false}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
