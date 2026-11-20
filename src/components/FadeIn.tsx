import { motion } from 'framer-motion';
import type { ComponentType, CSSProperties, ElementType, ReactNode } from 'react';

type AnyProps = Record<string, unknown>;

// motion.create() превращает любой тег (div, p, h1, img...) в анимируемый.
// Сохраняем результат в кэш, чтобы не создавать компонент заново при каждой перерисовке.
const cache = new Map<ElementType, ComponentType<AnyProps>>();

function getMotionComponent(tag: ElementType): ComponentType<AnyProps> {
  let component = cache.get(tag);
  if (!component) {
    component = motion.create(tag as string) as unknown as ComponentType<AnyProps>;
    cache.set(tag, component);
  }
  return component;
}

type FadeInProps = {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  /** true — анимация стартует сразу при загрузке (для первого экрана), а не при прокрутке */
  immediate?: boolean;
  [prop: string]: unknown;
};

const visible = { opacity: 1, x: 0, y: 0 };

// Плавное появление элемента, когда он попадает в зону видимости (один раз).
export default function FadeIn({
  as = 'div',
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  immediate = false,
  ...rest
}: FadeInProps) {
  const Component = getMotionComponent(as);
  const trigger = immediate
    ? { animate: visible }
    : { whileInView: visible, viewport: { once: true, margin: '50px', amount: 0 } };

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      {...trigger}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
