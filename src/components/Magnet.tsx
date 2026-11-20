import { useEffect, useRef, type ReactNode } from 'react';

type MagnetProps = {
  children: ReactNode;
  /** На каком расстоянии (px) от края элемента курсор начинает «притягивать» его */
  padding?: number;
  /** Сила эффекта: чем больше число, тем меньше сдвиг */
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
};

// «Магнитный» эффект: элемент слегка тянется за курсором мыши.
export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    let active = false;

    const reset = () => {
      if (!active) return;
      active = false;
      inner.style.transition = inactiveTransition;
      inner.style.transform = 'translate3d(0, 0, 0)';
    };

    const onMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const near =
        Math.abs(e.clientX - centerX) < rect.width / 2 + padding &&
        Math.abs(e.clientY - centerY) < rect.height / 2 + padding;

      if (!near) {
        reset();
        return;
      }
      if (!active) {
        active = true;
        inner.style.transition = activeTransition;
      }
      const dx = (e.clientX - centerX) / strength;
      const dy = (e.clientY - centerY) / strength;
      inner.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', reset);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', reset);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div ref={wrapperRef} className={className} style={{ position: 'relative' }}>
      <div
        ref={innerRef}
        style={{ transform: 'translate3d(0, 0, 0)', transition: inactiveTransition, willChange: 'transform' }}
      >
        {children}
      </div>
    </div>
  );
}
