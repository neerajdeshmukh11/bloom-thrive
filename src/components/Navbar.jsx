import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart, Phone, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "#services",
      dropdown: [
        "Pregnancy Care",
        "Baby Care",
        "Mother Care",
        "Lactation Support",
        "Newborn Care",
      ],
    },
    {
      name: "About Us",
      href: "#about",
    },
    {
      name: "Our Team",
      href: "#team",
    },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      <div className="container-main">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <span className="font-display text-2xl font-bold text-foreground">
                Mom<span className="text-primary">Kid</span>Care
              </span>
              <p className="text-xs text-muted-foreground -mt-1">Caring for you & your little one</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-card rounded-2xl shadow-medium p-4 min-w-[200px]">
                      {link.dropdown.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+1 234 567 890</span>
            </a>
            <button className="btn-primary text-sm py-3 px-6">
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-slide-up">
            <div className="py-4 px-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a
                    href={link.href}
                    className="block py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                  {link.dropdown && (
                    <div className="pl-8 space-y-1">
                      {link.dropdown.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block py-2 px-4 text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <button className="btn-primary w-full text-center">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
