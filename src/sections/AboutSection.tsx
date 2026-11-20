import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import { about } from '../data';

const decor = 'pointer-events-none absolute z-0 h-auto select-none';

// Секция «Обо мне»: 3D-картинки по углам, заголовок и текст, который проявляется при прокрутке
export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
    >
      <FadeIn
        as="img"
        src={about.decor.moon}
        alt=""
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className={`${decor} left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]`}
      />
      <FadeIn
        as="img"
        src={about.decor.object}
        alt=""
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className={`${decor} bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]`}
      />
      <FadeIn
        as="img"
        src={about.decor.lego}
        alt=""
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className={`${decor} right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]`}
      />
      <FadeIn
        as="img"
        src={about.decor.group}
        alt=""
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className={`${decor} bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]`}
      />

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn
            as="h2"
            delay={0}
            y={40}
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            {about.title}
          </FadeIn>
          <AnimatedText
            text={about.text}
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>
        <FadeIn delay={0.1}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
