import FadeIn from '../components/FadeIn';
import { sectionTitles, services } from '../data';

// Белая секция со списком услуг
export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn
        as="h2"
        className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C] sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        {sectionTitles.services}
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {services.map((service, i) => (
          <FadeIn
            key={service.num}
            delay={i * 0.1}
            className="flex items-center gap-5 py-8 sm:gap-8 sm:py-10 md:gap-12 md:py-12"
            style={i > 0 ? { borderTop: '1px solid rgba(12, 12, 12, 0.15)' } : undefined}
          >
            <span
              className="shrink-0 font-black leading-none tabular-nums text-[#0C0C0C]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.num}
            </span>
            <div className="flex flex-col gap-2 text-[#0C0C0C] sm:gap-3">
              <h3 className="font-medium uppercase leading-tight" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {service.title}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
              >
                {service.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
