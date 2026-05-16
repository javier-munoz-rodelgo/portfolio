import { useEffect, useState, useRef, RefObject } from "react";

/**
 * Hook para detectar cuando un elemento entra en el viewport.
 * @param options Opciones de Intersection Observer (threshold, rootMargin)
 * @param once Si es true, la animación solo se dispara la primera vez
 * @returns [ref, isVisible] Una referencia para asignar al elemento y un booleano indicando si es visible.
 */
export function useIntersectionObserver<T extends HTMLElement>(
  options = {},
  once = true,
): [RefObject<T | null>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        ...options,
      },
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options, once]);

  return [elementRef, isVisible];
}
