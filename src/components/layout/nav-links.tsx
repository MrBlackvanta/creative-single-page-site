import { navLinks } from "@/data";

type NavLinksVariant = "header" | "menu";

type Variant = {
  nav: string;
  list: string;
  link: string;
};

const variants: Record<NavLinksVariant, Variant> = {
  header: {
    nav: "hidden md:block",
    list: "flex gap-5 lg:gap-8",
    link: "text-nav lg:text-nav-lg",
  },
  menu: {
    nav: "",
    list: "flex flex-col items-center gap-6",
    link: "text-body-lg",
  },
};

type NavLinksProps = {
  variant: NavLinksVariant;
  onNavigate?: () => void;
};

export default function NavLinks({ variant, onNavigate }: NavLinksProps) {
  const { nav, list, link } = variants[variant];

  return (
    <nav aria-label="Main" className={nav}>
      <ul className={list}>
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              data-label={label}
              onClick={onNavigate}
              className={`v-nav-link v-focus-on-dark text-white ${link}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
