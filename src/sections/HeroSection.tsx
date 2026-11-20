import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import ContactButton from '../components/ContactButton';
import { hero, navLinks } from '../data';

// Первый экран: меню, огромный заголовок, подпись, кнопка и 3D-портрет.
// У всех FadeIn здесь стоит immediate: первый экран виден сразу, ждать прокрутки не нужно.
export default function HeroSection() {
  return (
    <section className="relative flex h-screen h-svh flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn
        as="nav"
        immediate
        delay={0}
        y={-20}
        className="relative z-20 flex justify-between px-6 pt-6 md:px-10 md:pt-8"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn
          as="h1"
          immediate
          delay={0.15}
          y={40}
          className="hero-heading mt-6 w-full text-center text-[16vw] font-black uppercase leading-[0.95] tracking-tight sm:whitespace-nowrap sm:text-[7.4vw] sm:leading-none md:mt-4 md:text-[7.9vw] lg:text-[8.5vw]"
        >
          {hero.title[0]}
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> </span>
          {hero.title[1]}
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn
          as="p"
          immediate
          delay={0.35}
          y={20}
          className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          {hero.subtitle}
        </FadeIn>
        <FadeIn immediate delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Внешний блок отвечает за позицию, внутренний — за анимацию появления.
          На больших экранах размер зависит от высоты окна, чтобы голова доходила почти до заголовка. */}
      <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[min(66vh,46vw)]">
        <FadeIn immediate delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={hero.portrait}
              alt="3D-аватар"
              className="block h-auto w-full select-none"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
