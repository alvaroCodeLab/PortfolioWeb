"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `transition-colors ${
      pathname === href ? "text-white" : "text-white/80 hover:text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradientCover">
      <div className="flex justify-center items-center py-5 max-w-7xl mx-auto">
        <nav className="flex flex-row gap-x-10">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>

          <Link href="/projects" className={linkClass("/projects")}>
            Projects
          </Link>

          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
