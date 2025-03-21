import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Voter Services', path: '/voter-services' },
    { name: 'Election Results', path: '/results' },
    { name: 'Election Timeline', path: '/election-timeline' },
    { name: 'Updates', path: '/updates' },
    { name: 'About ECI', path: '/about' },
    { name: 'Electoral Laws', path: '/electoral-laws' },
    { name: 'Media', path: '/media' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/90'}`}>
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-10 h-10 mr-2">
              {imgError ? (
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  ECI
                </div>
              ) : (
                <Image 
                  src="/images/logo.png" 
                  alt="Election Commission of India Logo"
                  fill
                  className="object-contain"
                  onError={() => setImgError(true)}
                />
              )}
            </div>
            <div>
              <div className="font-bold text-lg text-primary">Election Commission</div>
              <div className="text-xs text-neutral-dark">of India</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  router.pathname === link.path
                    ? 'text-primary bg-primary/10'
                    : 'text-neutral-dark hover:text-primary hover:bg-neutral-light'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Login Button */}
          <div className="hidden md:flex items-center">
            <Link href="/login" className="btn-primary text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-dark hover:text-primary hover:bg-neutral-light focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-neutral`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                router.pathname === link.path
                  ? 'text-primary bg-primary/10'
                  : 'text-neutral-dark hover:text-primary hover:bg-neutral-light'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <Link
            href="/login"
            className="flex items-center px-3 py-2 rounded-md text-base font-medium text-primary"
            onClick={() => setIsOpen(false)}
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
