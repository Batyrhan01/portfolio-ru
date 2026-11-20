import { Github, Send } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { contact, contacts } from '../data';

const linkClass =
  'inline-flex items-center gap-2 font-light text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70';

// Последняя секция: контакты и подвал сайта
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center px-5 pb-8 pt-24 text-center sm:px-8 sm:pt-32 md:px-10 md:pt-40"
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        {contact.title}
      </FadeIn>

      <FadeIn
        as="p"
        delay={0.1}
        className="mt-8 max-w-[560px] font-light leading-relaxed text-[#D7E2EA] sm:mt-10"
        style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
      >
        {contact.text}
      </FadeIn>

      <FadeIn delay={0.2} className="mt-10 sm:mt-12">
        <ContactButton />
      </FadeIn>

      <FadeIn delay={0.3} className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-3 text-base sm:text-lg">
        <a href={contacts.telegram} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <Send className="h-5 w-5" aria-hidden="true" />
          Telegram {contacts.telegramName}
        </a>
        <a href={contacts.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <Github className="h-5 w-5" aria-hidden="true" />
          GitHub {contacts.githubName}
        </a>
      </FadeIn>

      <footer className="mt-24 flex w-full flex-col items-center justify-between gap-2 border-t border-[#D7E2EA]/15 pt-6 text-xs uppercase tracking-wider text-[#D7E2EA]/50 sm:mt-32 sm:flex-row">
        <span>© {new Date().getFullYear()} Батархан</span>
        <span>Сделано вайб-кодингом</span>
      </footer>
    </section>
  );
}
