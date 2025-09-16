import React, { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    // Lock/unlock background scroll
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Close on Escape key
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
      `}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu Links */}
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
          `}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
