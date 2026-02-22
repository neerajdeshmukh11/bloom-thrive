import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Heart, Phone, ChevronDown, Building2 } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: "Home", href: "#" },
    {
      name: "Services",
      href: "#services",
      dropdown: [
        "Patient Registration",
        "Appointment Booking",
        "Doctor Consultation",
        "Vaccination Tracking",
        "Digital Health Records",
      ],
    },
    {
      name: "Health Guide",
      href: "#health-guide",
      dropdown: [
        "Pregnancy Month Guide",
        "Mother Care",
        "Baby Care",
        "Yoga & Exercise",
      ],
    },
    { name: "Find Hospital", href: "#find-hospital" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground text-xs py-2">
        <div className="container-main px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" /> Emergency: 108
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Mon - Sat: 9:00 AM - 8:00 PM</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:underline">Patient Portal</a>
            <span>|</span>
            <a href="#" className="hover:underline">Doctor Login</a>
          </div>
        </div>
      </div>

      <div className="container-main">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <span className="font-display text-2xl font-bold text-foreground">
                Mom<span className="text-primary">Kid</span>Care
              </span>
              <p className="text-xs text-muted-foreground -mt-1">Hospital & Child Care Center</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium text-sm"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                </a>
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-card rounded-2xl shadow-medium p-3 min-w-[220px]">
                      {link.dropdown.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2.5 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors text-sm"
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
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">+91 1234 567 890</span>
            </a>
            <a href="#contact" className="btn-primary text-sm py-3 px-6">
              Book Appointment
            </a>
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
              <div className="pt-4 border-t border-border space-y-2">
                <a href="#" className="block w-full text-center py-3 px-4 text-primary font-medium border border-primary rounded-full">
                  Patient Portal
                </a>
                <a href="#contact" className="btn-primary w-full text-center block" onClick={() => setIsOpen(false)}>
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
