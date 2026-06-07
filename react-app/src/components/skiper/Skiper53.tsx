import { AnimatePresence, motion } from "framer-motion"
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
  const [activeImage, setActiveImage] = useState<number | null>(1)

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className={className}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center gap-1">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-3xl"
              style={{ width: "clamp(200px, 22vw, 360px)" }}
              initial={{ height: "2.5rem" }}
              animate={{ height: activeImage === index ? "clamp(200px, 20vw, 320px)" : "2.5rem" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setActiveImage(index)}
              onMouseEnter={() => setActiveImage(index)}
            >
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute h-full w-full bg-gradient-to-t from-black/50 to-transparent"
                    style={{ zIndex: 1 }}
                  />
                )}
              </AnimatePresence>
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute flex h-full w-full flex-col items-end justify-end px-4 pb-5"
                    style={{ zIndex: 2 }}
                  >
                    <p className="text-left text-xs text-white/50">{image.code}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <img
                src={image.src}
                className="size-full object-cover"
                alt={image.alt}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
