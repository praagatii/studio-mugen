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

  const { width, height } = dimension;
  const isMobile = width < 768;

  const m1 = isMobile ? 0.8 : 2;
  const m2 = isMobile ? 1.3 : 3.3;
  const m3 = isMobile ? 0.5 : 1.25;
  const m4 = isMobile ? 1.1 : 3;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * m1]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * m2]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * m3]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * m4]);

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
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden max-md:h-[150vh] max-md:gap-[1vw]"
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
      className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%] max-md:min-w-0 max-md:first:top-[-20%] max-md:[&:nth-child(2)]:top-[-55%] max-md:[&:nth-child(3)]:top-[-25%] max-md:[&:nth-child(4)]:top-[-40%] max-md:gap-[1vw]"
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
