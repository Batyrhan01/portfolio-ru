// ============================================================
//  ВСЕ ТЕКСТЫ, ССЫЛКИ И КАРТИНКИ САЙТА — В ЭТОМ ФАЙЛЕ.
//  Хочешь поменять текст на сайте — меняй его здесь.
// ============================================================

// Путь до папки public. Нужен, чтобы картинки открывались и на компьютере, и на GitHub Pages.
const base = import.meta.env.BASE_URL;

export const contacts = {
  telegram: 'https://t.me/mew_maw01',
  telegramName: '@mew_maw01',
  github: 'https://github.com/Batyrhan01',
  githubName: 'Batyrhan01',
};

// Ссылки в меню. href — это id секции, к которой прокрутится страница.
export const navLinks = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Контакты', href: '#contact' },
];

export const hero = {
  // Две части заголовка: на телефоне они стоят в две строки, на компьютере — в одну
  title: ['Привет, я', 'Батархан'],
  subtitle: 'вайб-кодер, который создаёт яркие и запоминающиеся сайты',
  // ВРЕМЕННАЯ картинка из шаблона (это персонаж Jack, а не ты).
  // Замени на свой 3D-аватар: положи PNG с прозрачным фоном в папку public
  // и напиши здесь `${base}avatar.png`.
  portrait:
    'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png',
};

// Бегущая лента из GIF. Сейчас это превью шаблонов с motionsites.ai (не твои работы).
// Со временем замени их на гифки или скриншоты своих сайтов.
export const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const figma = 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7';

export const about = {
  title: 'Обо мне',
  text:
    'Я вайб-кодер из Астаны. Делаю сайты и веб-приложения для малого бизнеса: лендинги, сайты для кафе, салонов и магазинов. Стараюсь, чтобы сайт выглядел аккуратно, быстро открывался и нормально работал на телефоне. Если есть задача, напишите мне, обсудим.',
  // Декоративные 3D-картинки по углам секции (из шаблона)
  decor: {
    moon: `${figma}/moon_icon.11395d36.png`,
    object: `${figma}/p59_1.4659672e.png`,
    lego: `${figma}/lego_icon-1.703bb594.png`,
    group: `${figma}/Group_134-1.2e04f3ce.png`,
  },
};

export const sectionTitles = {
  services: 'Услуги',
  projects: 'Проекты',
};

export const contact = {
  title: 'Контакты',
  text: 'Есть идея для сайта? Напишите мне в Telegram — обсудим задачу, сроки и стоимость.',
};

export const services = [
  {
    num: '01',
    title: 'Лендинги',
    text: 'Одностраничный сайт, который понятно рассказывает о вашем товаре или услуге и превращает посетителей в заявки.',
  },
  {
    num: '02',
    title: 'Сайты для бизнеса',
    text: 'Сайт для кафе, салона, магазина или студии: услуги, цены, контакты и запись — всё в вашем стиле и удобно на телефоне.',
  },
  {
    num: '03',
    title: 'Веб-приложения',
    text: 'Полезные инструменты для бизнеса: онлайн-запись, каталоги, калькуляторы стоимости и другие интерактивные сервисы.',
  },
  {
    num: '04',
    title: 'Анимации и эффекты',
    text: 'Плавные анимации, эффекты при прокрутке и интерактивные элементы, которые делают сайт живым и запоминающимся.',
  },
  {
    num: '05',
    title: 'Запуск и поддержка',
    text: 'Опубликую сайт в интернете, подключу домен и помогу с правками и обновлениями после запуска.',
  },
];

export type ProjectImage = {
  src: string;
  /** Какую часть картинки показывать, если она не влезает целиком: 'center', 'left', 'right', 'top'... */
  position?: string;
};

export type Project = {
  name: string;
  category: string;
  url: string;
  // [левая верхняя, левая нижняя, большая справа]
  images: [ProjectImage, ProjectImage, ProjectImage];
};

// Твои настоящие проекты. Скриншоты лежат в папке public/projects.
export const projects: Project[] = [
  {
    name: 'Blendy',
    category: 'Учебный проект · слайдер смузи',
    url: 'https://batyrhan01.github.io/blendy-smoothie/',
    images: [
      { src: `${base}projects/blendy-strawberry.jpg` },
      { src: `${base}projects/blendy-kiwi.jpg` },
      { src: `${base}projects/blendy-berry.jpg` },
    ],
  },
  {
    name: 'Bean & Bloom',
    category: 'Концепт · сайт кофейни',
    url: 'https://batyrhan01.github.io/batarkhan-portfolio/demos/coffee.html',
    images: [
      { src: `${base}projects/coffee-menu.jpg`, position: 'left' },
      { src: `${base}projects/coffee-visit.jpg`, position: 'left' },
      { src: `${base}projects/coffee-hero.jpg`, position: 'left' },
    ],
  },
  {
    name: 'Steppe Barber',
    category: 'Концепт · сайт барбершопа',
    url: 'https://batyrhan01.github.io/batarkhan-portfolio/demos/barber.html',
    images: [
      { src: `${base}projects/barber-prices.jpg`, position: 'left' },
      { src: `${base}projects/barber-book.jpg` },
      { src: `${base}projects/barber-hero.jpg`, position: 'left' },
    ],
  },
];

export type MoreSite = {
  /** Имя репозитория: из него собираются ссылка и путь к снимку public/sites/<id>.webp */
  id: string;
  name: string;
  niche: string;
  kind: 'dent' | 'other';
};

export const moreSitesText = 'Сайты для бизнеса в Астане. Сделал по своей инициативе, каждый можно открыть.';

export const siteUrl = (id: string) => `https://batyrhan01.github.io/${id}/`;
export const siteShot = (id: string) => `${base}sites/${id}.webp`;

// Блок «Ещё N сайтов». Число в заголовке и фильтре считается само.
export const moreSites: MoreSite[] = [
  { id: 'visa-dent', name: 'VISA dent', niche: 'Стоматология', kind: 'dent' },
  { id: 'issa-dent', name: 'Issa Dent', niche: 'Стоматология', kind: 'dent' },
  { id: 'cristall-dent', name: 'Кристалл-Дент', niche: 'Стоматология', kind: 'dent' },
  { id: 'navi-dent', name: 'NaviDent', niche: 'Стоматология', kind: 'dent' },
  { id: 'mmk-dental', name: 'MMK Dental Clinic', niche: 'Стоматология', kind: 'dent' },
  { id: 'ramus-dental', name: 'Ramus dental clinic', niche: 'Стоматология', kind: 'dent' },
  { id: 'alfa-stom', name: 'Альфа Стом', niche: 'Стоматология', kind: 'dent' },
  { id: 'impladent-family', name: 'Impladent family', niche: 'Стоматология', kind: 'dent' },
  { id: 'janym-stom', name: 'Janym Stom', niche: 'Стоматология', kind: 'dent' },
  { id: 'batys-dent', name: 'Batys Dent', niche: 'Стоматология', kind: 'dent' },
  { id: 'aq-clinic', name: 'AQ clinic', niche: 'Стоматология', kind: 'dent' },
  { id: 'dnk-dent', name: 'DNK Dent', niche: 'Стоматология', kind: 'dent' },
  { id: 'konfeta-astana', name: 'Конфета', niche: 'Салон красоты', kind: 'other' },
  { id: 'qaz-pvh', name: 'QAZ PVH', niche: 'Натяжные потолки', kind: 'other' },
  { id: 'cleaning-taza', name: 'Cleaning Taza', niche: 'Клининг', kind: 'other' },
  { id: 'total-dent', name: 'TotalDent', niche: 'Стоматология', kind: 'dent' },
  { id: 'hi-dent', name: 'Hi Dent', niche: 'Стоматология', kind: 'dent' },
  { id: 'alldent-astana', name: 'All Dent', niche: 'Стоматология', kind: 'dent' },
  { id: 'luxvita-dental', name: 'LuxVita', niche: 'Стоматология', kind: 'dent' },
];
