import { useEffect, useRef, useState } from 'react';
import { marqueeImages } from '../data';

const row1 = marqueeImages.slice(0, 11);
const row2 = marqueeImages.slice(11);

type RowProps = {
  images: string[];
  shift: number;
};

function Row({ images, shift }: RowProps) {
  // Картинки повторяются 3 раза, чтобы лента не заканчивалась при движении
  const tiles = [...images, ...images, ...images];
  return (
    <div className="flex w-max gap-3" style={{ transform: `translateX(${shift}px)`, willChange: 'transform' }}>
      {tiles.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          draggable={false}
          className="h-[270px] w-[420px] flex-shrink-0 rounded-2xl bg-[#16161a] object-cover"
        />
      ))}
    </div>
  );
}

// Две ленты картинок, которые едут в разные стороны, пока ты прокручиваешь страницу
export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={ref}
      aria-hidden="true"
      className="flex flex-col items-center gap-3 overflow-hidden pb-10 pt-24 sm:pt-32 md:pt-40"
      style={{ background: '#0C0C0C' }}
    >
      <Row images={row1} shift={offset - 200} />
      <Row images={row2} shift={-(offset - 200)} />
    </section>
  );
}
