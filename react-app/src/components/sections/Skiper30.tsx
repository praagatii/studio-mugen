import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import srirangaImg from '../../assets/sriranga.png'
import resolveImg from '../../assets/resolvemockup.png'
import bangloreImg from '../../assets/banglore.png'
import blind75Img from '../../assets/blind75.png'
import rutamImg from '../../assets/rutam.png'
import p7Img from '../../assets/p7.png'
import p3Img from '../../assets/p3.png'
import miraiImg from '../../assets/mirai.png'

const images = [
  srirangaImg, resolveImg, bangloreImg,
  blind75Img, rutamImg, p7Img,
  p3Img, miraiImg,
]

const Skiper30 = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section id="portfolio" className="relative w-full">
      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden max-md:h-[100vh] max-md:gap-[1vw]"
        style={{ background: '#000', padding: '2vw' }}
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[0]]} y={y3} />
        <Column images={[images[1], images[2], images[3]]} y={y4} />
      </div>
    </section>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div
      className="relative flex h-full w-1/4 flex-col gap-[2vw] max-md:gap-[1vw]"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-full w-full overflow-hidden rounded-lg">
          <img
            src={src}
            alt=""
            className="pointer-events-none object-cover w-full h-full"
          />
        </div>
      ))}
    </motion.div>
  );
};

export { Skiper30 };
