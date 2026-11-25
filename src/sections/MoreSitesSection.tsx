import { useEffect, useRef, useState } from 'react';
import FadeIn from '../components/FadeIn';
import { moreSites, moreSitesText, siteShot, siteUrl } from '../data';

type Filter = 'all' | 'dent' | 'other';

// Тот же градиент, что у кнопки «Написать мне»
const gradient = 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)';

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Все' },
  { id: 'dent', label: 'Стоматологии' },
  { id: 'other', label: 'Другое' },
];

const byFilter = (f: Filter) => (f === 'all' ? moreSites : moreSites.filter((s) => s.kind === f));

function siteWord(n: number) {
  const d = n % 10;
  const h = n % 100;
  if (d === 1 && h !== 11) return 'сайт';
  if (d >= 2 && d <= 4 && (h < 12 || h > 14)) return 'сайта';
  return 'сайтов';
}

// Компактная сетка сайтов под тремя большими проектами
export default function MoreSitesSection() {
  const [filter, setFilter] = useState<Filter>('all');
  const [open, setOpen] = useState(false);
  const list = useRef<HTMLUListElement>(null);
  const section = useRef<HTMLElement>(null);
  const sites = byFilter(filter);
  const collapsed = filter === 'all' && !open;

  // Ссылка с #more: React рисует страницу позже, поэтому прокручиваем сами
  useEffect(() => {
    if (window.location.hash === '#more') section.current?.scrollIntoView();
  }, []);

  const showAll = () => {
    const links = list.current?.querySelectorAll<HTMLAnchorElement>('a');
    const firstHidden = links && Array.from(links).find((a) => a.offsetParent === null);
    setOpen(true);
    // Кнопка исчезнет, поэтому фокус переходит на первую открывшуюся карточку
    requestAnimationFrame(() => firstHidden?.focus({ preventScroll: true }));
  };

  return (
    <section
      ref={section}
      id="more"
      className="relative z-10 px-5 pt-10 sm:px-8 md:px-10"
      style={{ background: '#0C0C0C' }}
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn
          as="h2"
          className="hero-heading pb-1 pt-4 text-center font-black uppercase leading-[1.25] tracking-tight"
          style={{ fontSize: 'clamp(2rem, 7vw, 88px)' }}
        >
          Ещё {moreSites.length} {siteWord(moreSites.length)}
        </FadeIn>
        <FadeIn
          as="p"
          delay={0.1}
          className="mx-auto mt-5 max-w-[560px] text-center font-light leading-relaxed text-[#D7E2EA] sm:mt-6"
          style={{ fontSize: 'clamp(1rem, 1.6vw, 1.25rem)' }}
        >
          {moreSitesText}
        </FadeIn>

        <div role="group" aria-label="Фильтр сайтов" className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3">
          {filters.map((f) => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.id)}
                className={`min-h-[44px] rounded-full border-2 px-3.5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-6 sm:text-base ${
                  active ? 'border-white text-white' : 'border-[#D7E2EA]/40 text-[#D7E2EA] hover:border-[#D7E2EA]'
                }`}
                style={active ? { background: gradient, backgroundOrigin: 'border-box' } : undefined}
              >
                {f.label} {byFilter(f.id).length}
              </button>
            );
          })}
        </div>

        <ul
          ref={list}
          className="mt-10 grid list-none grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:mt-12 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4"
        >
          {sites.map((s, i) => (
            <li key={s.id} className={collapsed && i >= 8 ? 'hidden' : collapsed && i >= 6 ? 'hidden sm:block' : ''}>
              <a
                href={siteUrl(s.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-[24px] border-2 border-[#D7E2EA]/20 bg-[#16161a] p-3 transition-colors duration-200 hover:border-[#B600A8] focus-visible:border-[#B600A8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <div className="overflow-hidden rounded-[14px]">
                  <img
                    src={siteShot(s.id)}
                    alt={`Главный экран сайта ${s.name}`}
                    width={1440}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
                  />
                </div>
                <div className="px-2 pb-2 pt-4">
                  <h3 className="text-lg font-medium leading-tight text-[#D7E2EA]">{s.name}</h3>
                  <p className="mt-1 text-sm font-light text-[#D7E2EA]/70">{s.niche}</p>
                  <p className="mt-3 text-sm text-[#D98BEA]">Инициативный проект</p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {collapsed && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={showAll}
              className="min-h-[48px] rounded-full border-2 border-[#D7E2EA] px-8 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
            >
              Показать все {moreSites.length}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
