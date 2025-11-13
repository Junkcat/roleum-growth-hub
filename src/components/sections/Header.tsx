import { useState } from "react";
import logoFull from "@/assets/roleum-logo-full.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-n-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src={logoFull} 
                alt="Roleum - LXP-платформа и методология Центра экспертизы" 
                className="h-16 w-auto cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-n-700 hover:text-p-600 font-medium transition-colors"
              >
                Возможности
              </button>
              <button
                onClick={() => scrollToSection("platform")}
                className="text-n-700 hover:text-p-600 font-medium transition-colors"
              >
                Платформа
              </button>
              <button
                onClick={() => scrollToSection("coe")}
                className="text-n-700 hover:text-p-600 font-medium transition-colors"
              >
                Методология
              </button>
              <button
                onClick={() => scrollToSection("cases")}
                className="text-n-700 hover:text-p-600 font-medium transition-colors"
              >
                Кейсы
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-n-700 hover:text-p-600 font-medium transition-colors"
              >
                FAQ
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-n-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-n-200">
              <nav className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-n-700 hover:text-p-600 font-medium transition-colors text-left"
                >
                  Возможности
                </button>
                <button
                  onClick={() => scrollToSection("platform")}
                  className="text-n-700 hover:text-p-600 font-medium transition-colors text-left"
                >
                  Платформа
                </button>
                <button
                  onClick={() => scrollToSection("coe")}
                  className="text-n-700 hover:text-p-600 font-medium transition-colors text-left"
                >
                  Методология
                </button>
                <button
                  onClick={() => scrollToSection("cases")}
                  className="text-n-700 hover:text-p-600 font-medium transition-colors text-left"
                >
                  Кейсы
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-n-700 hover:text-p-600 font-medium transition-colors text-left"
                >
                  FAQ
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
