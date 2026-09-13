"use client";

import { CloseIcon, MenuIcon } from "@/components/icons";
import { useEffect, useRef, useState } from "react";
import NavLinks from "./nav-links";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnOutsideClick = ({ target }: PointerEvent) => {
      const node = target as Node;
      if (
        !panelRef.current?.contains(node) &&
        !toggleRef.current?.contains(node)
      )
        setOpen(false);
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };

    const tablet = window.matchMedia("(min-width: 48rem)");
    const closeOnTablet = () => {
      if (tablet.matches) setOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    tablet.addEventListener("change", closeOnTablet);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
      tablet.removeEventListener("change", closeOnTablet);
    };
  }, [open]);

  return (
    <div className="-mr-2.5 ml-auto md:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="v-focus flex size-11 items-center justify-center text-black/50"
      >
        {open ? <CloseIcon className="size-5" /> : <MenuIcon className="w-6" />}
      </button>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`bg-ink absolute top-full right-6 w-63 pt-8 pb-7 motion-safe:transition-[opacity,visibility] ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <NavLinks variant="menu" onNavigate={() => setOpen(false)} />
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="v-btn v-btn-red v-focus-on-dark mx-auto mt-6 w-49.75"
        >
          Schedule a Call
        </a>
      </div>
    </div>
  );
}
