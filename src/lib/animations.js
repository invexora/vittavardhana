/**
 * GSAP Animation Utilities for Vittavardhana
 * Provides scroll-triggered reveals, text splitting, and smooth scroll integration.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialize Lenis smooth scrolling + integrate with GSAP ScrollTrigger
 */
export async function initSmoothScroll() {
  const Lenis = (await import('lenis')).default;
  
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  return lenis;
}

/**
 * Scroll-triggered reveal animation for a single element.
 */
export function createScrollReveal(element, options = {}) {
  if (!element) return;

  const {
    y = 40,
    opacity = 0,
    duration = 0.8,
    delay = 0,
    ease = 'power2.out',
    start = 'top 85%',
  } = options;

  gsap.fromTo(element,
    { y, opacity },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: 'play none none reverse',
      },
    }
  );
}

/**
 * Staggered reveal for child elements of a container.
 */
export function createStaggerReveal(container, childSelector, options = {}) {
  if (!container) return;

  const children = container.querySelectorAll(childSelector);
  if (children.length === 0) return;

  const {
    y = 30,
    duration = 0.6,
    stagger = 0.08,
    ease = 'power2.out',
    start = 'top 85%',
  } = options;

  gsap.fromTo(children,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease,
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: 'play none none reverse',
      },
    }
  );
}

/**
 * Animated counter from 0 to target number.
 */
export function createCounterAnimation(element, target, options = {}) {
  if (!element) return;

  const { duration = 2, suffix = '', start = 'top 80%' } = options;
  const obj = { val: 0 };

  gsap.to(obj, {
    val: target,
    duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start,
      toggleActions: 'play none none reverse',
    },
    onUpdate: () => {
      element.textContent = Math.floor(obj.val) + suffix;
    },
  });
}
/**
 * Batch reveal elements as they enter the viewport.
 * Perfect for grids where rows need to animate independently as the user scrolls down to them.
 */
export function createBatchReveal(childSelector) {
  const elements = gsap.utils.toArray(childSelector);
  if (elements.length === 0) return;

  // Set initial hidden state
  gsap.set(elements, { opacity: 0, y: 80 });

  ScrollTrigger.batch(elements, {
    start: 'top 85%', // Trigger when the top of the element hits 85% down the viewport
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        overwrite: true
      });
    },
  });
}

/**
 * Pins a single row container at the center of the screen, animates its children, and then unpins.
 */
export function createPinnedRow(container, childSelector) {
  if (!container) return;

  const children = gsap.utils.toArray(childSelector, container);
  if (children.length === 0) return;

  // Initial state for children
  gsap.set(children, { opacity: 0, y: 100 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: 'center center', // Pin when the row hits the center of the screen
      end: '+=50%', // Lock for 50% of screen height to reduce scroll blank space
      pin: true,
      pinSpacing: false, // Absolutely disable the blank spacing padding insertion
      scrub: 1,
      anticipatePin: 1,
    }
  });

  // Animate children in while pinned
  tl.to(children, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.4,
    ease: 'power2.out',
  });
}
/**
 * Refresh all ScrollTriggers — call after dynamic content changes.
 */
export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}

/**
 * Kill all ScrollTriggers — call on unmount/cleanup.
 */
export function killAllScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

export { gsap, ScrollTrigger };
