import { motion } from "framer-motion"
import { useState } from "react"
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
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className={className}>
      <div className="flex flex-col gap-1.5">
        {images.map((image, index) => {
          const isOpen = hovered === index

          return (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl"
              style={{
                width: "clamp(180px, 20vw, 320px)",
                background: "#000",
              }}
              animate={{ height: isOpen ? "clamp(180px, 18vw, 300px)" : "2.5rem" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {isOpen && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  style={{ zIndex: 1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                />
              )}
              {isOpen && (
                <motion.div
                  className="absolute bottom-0 right-0 px-3 pb-3"
                  style={{ zIndex: 2 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.15 }}
                >
                  <p className="text-xs text-white/40">{image.code}</p>
                </motion.div>
              )}
              <img
                src={image.src}
                className="size-full object-cover"
                alt={image.alt}
                draggable={false}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
