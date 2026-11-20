import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef, type CSSProperties } from 'react';

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: CSSProperties;
};

// Текст «проявляется» буква за буквой, пока ты прокручиваешь страницу.
export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });

  const total = text.length;
  const words = text.split(' ');
  let index = 0;

  return (
    <p ref={ref} className={`relative ${className}`} style={style}>
      {words.map((word, w) => {
        const chars = word.split('').map((char) => {
          const i = index++;
          return <Char key={i} char={char} progress={scrollYProgress} range={[i / total, (i + 1) / total]} />;
        });
        index++; // пробел после слова тоже занимает своё место в анимации
        return (
          <span key={w}>
            <span className="inline-block whitespace-nowrap">{chars}</span>
            {w < words.length - 1 ? ' ' : null}
          </span>
        );
      })}
    </p>
  );
}

type CharProps = {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
};

function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative">
      {/* Невидимая буква держит место, видимая — плавно проявляется поверх */}
      <span className="opacity-0">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}
