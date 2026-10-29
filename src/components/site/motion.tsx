"use client";

import { useEffect } from "react";

/**
 * Page motion layer:
 * - fires [data-reveal] entrances once, when the element is 85-90% down the viewport
 * - staggers direct children of [data-stagger] containers
 * - plays the one moving picture only while it is in view, never under reduced motion
 */
export function Motion() {
  useEffect(() => {
    const calm = matchMedia("(prefers-reduced-motion: reduce)");

    const stagger = () => {
      document.querySelectorAll("[data-stagger]").forEach((el) => {
        [...el.children].forEach((child, i) => {
          (child as HTMLElement).style.transitionDelay = `${i * 70}ms`;
        });
      });
    };

    const reveals: HTMLElement[] = [...document.querySelectorAll("[data-reveal]")];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px 15% 0px", threshold: 0.05 }
    );
    if (!calm.matches) {
      // Only elements within the first screen and a half keep a hidden entrance;
      // everything deeper is in place on the first paint (nothing waits for a scroll).
      const reach = window.innerHeight * 1.4;
      reveals.forEach((el) => {
        if (el.getBoundingClientRect().top > reach) {
          el.style.transition = "none";
          el.classList.add("is-in");
        } else {
          io.observe(el);
        }
      });
    } else {
      reveals.forEach((el) => el.classList.add("is-in"));
    }

    // the one moving picture: play in view only, on wide screens
    const wide = matchMedia("(min-width: 900px)");
    const clips: HTMLVideoElement[] = [...document.querySelectorAll("video[data-play-in-view]")];
    const inView = new Set<HTMLVideoElement>();
    const sync = () => {
      clips.forEach((v) => {
        if (calm.matches || !wide.matches) {
          v.pause();
        } else if (inView.has(v)) v.play().catch(() => {});
        else v.pause();
      });
    };
    const clipIo = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const v = e.target as HTMLVideoElement;
          if (e.isIntersecting) inView.add(v);
          else inView.delete(v);
          sync();
        }
      },
      { threshold: 0.2 }
    );
    clips.forEach((v) => clipIo.observe(v));
    sync();
    const onCalm = () => sync();
    calm.addEventListener("change", onCalm);

    stagger();
    return () => {
      io.disconnect();
      clipIo.disconnect();
      calm.removeEventListener("change", onCalm);
    };
  }, []);

  return null;
}
