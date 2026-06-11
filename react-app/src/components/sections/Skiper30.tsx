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

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
  className?: string;
  style?: React.CSSProperties;
};

const Column = ({ images, y, className = "" }: ColumnProps) => {
  return (
    <motion.div
      className={className}
      style={{ y, willChange: 'transform' }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-full w-full overflow-hidden rounded-lg">
          <img
            src={src}
            alt=""
            loading="lazy"
            className="pointer-events-none object-cover w-full h-full"
          />
        </div>
      ))}
    </motion.div>
  );
};

const Skiper30 = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { width, height } = dimension;
  const isMobile = width < 768;

  const m1 = isMobile ? 0.7 : 2;
  const m2 = isMobile ? 1.2 : 3.3;
  const m3 = isMobile ? 0.45 : 1.25;
  const m4 = isMobile ? 1.0 : 3;

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

  if (isMobile) {
    return (
      <section id="portfolio" className="relative w-full">
        <div
          ref={gallery}
          className="relative box-border flex h-[120vh] gap-[1vw] overflow-hidden"
          style={{ background: '#000', padding: '1.5vw', contain: 'paint' }}
        >
          <Column
            images={[images[0], images[2]]}
            y={y}
            className="relative flex h-full w-1/2 flex-col gap-[1.5vw] first:top-[-15%] [&:nth-child(2)]:top-[-35%]"
          />
          <Column
            images={[images[4], images[6]]}
            y={y2}
            className="relative flex h-full w-1/2 flex-col gap-[1.5vw] first:top-[-35%] [&:nth-child(2)]:top-[-15%]"
          />
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="relative w-full">
      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden"
        style={{ background: '#000', padding: '2vw', contain: 'paint' }}
      >
        <Column
          images={[images[0], images[1], images[2]]}
          y={y}
          className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
        />
        <Column
          images={[images[3], images[4], images[5]]}
          y={y2}
          className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
        />
        <Column
          images={[images[6], images[7], images[0]]}
          y={y3}
          className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
        />
        <Column
          images={[images[1], images[2], images[3]]}
          y={y4}
          className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]"
        />
      </div>
    </section>
  );
};

export { Skiper30 };
