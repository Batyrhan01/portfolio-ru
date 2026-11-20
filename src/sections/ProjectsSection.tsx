import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { projects, sectionTitles, type Project } from '../data';

const rounded = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

type ProjectCardProps = {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function ProjectCard({ project, index, total, progress }: ProjectCardProps) {
  // Карточки, которые ушли «под» следующие, немного уменьшаются
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const num = String(index + 1).padStart(2, '0');
  const [topImage, bottomImage, bigImage] = project.images;

  return (
    <div className="sticky top-24 h-[85vh] md:top-[max(6rem,12vh)]">
      <motion.div
        className={`relative origin-top border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 ${rounded}`}
        style={{ scale, top: `${index * 28}px`, background: '#0C0C0C' }}
      >
        <div className="mb-4 flex flex-wrap items-end justify-between gap-4 sm:mb-6 sm:gap-6 md:mb-8">
          <div className="flex min-w-0 items-end gap-4 sm:gap-6 md:gap-8">
            <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(3rem, min(7vw, 11vh), 100px)' }}>
              {num}
            </span>
            <div className="flex min-w-0 flex-col gap-1 pb-1 sm:gap-2 sm:pb-2 md:pb-3">
              <span className="text-[10px] uppercase tracking-widest text-[#D7E2EA]/60 sm:text-xs md:text-sm">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.1rem, 2.6vw, 2.4rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton href={project.url} />
        </div>

        <div className="flex gap-3 sm:gap-4">
          <div className="flex min-w-0 flex-[2] flex-col gap-3 sm:gap-4">
            <img
              src={topImage.src}
              alt={`${project.name} — скриншот сайта`}
              loading="lazy"
              className={`w-full object-cover ${rounded}`}
              style={{ height: 'clamp(130px, min(16vw, 20vh), 230px)', objectPosition: topImage.position }}
            />
            <img
              src={bottomImage.src}
              alt={`${project.name} — скриншот сайта`}
              loading="lazy"
              className={`w-full object-cover ${rounded}`}
              style={{ height: 'clamp(160px, min(22vw, 28vh), 340px)', objectPosition: bottomImage.position }}
            />
          </div>
          {/* absolute: большая картинка растягивается на высоту левой колонки, а не задаёт её сама */}
          <div className="relative min-w-0 flex-[3]">
            <img
              src={bigImage.src}
              alt={`${project.name} — главный экран`}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover ${rounded}`}
              style={{ objectPosition: bigImage.position }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Тёмная секция с проектами: карточки «складываются стопкой» при прокрутке
export default function ProjectsSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 pb-10 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        {sectionTitles.projects}
      </FadeIn>

      <div ref={container} className="relative mx-auto max-w-7xl">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} total={projects.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
