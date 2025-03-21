import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image 
                src="/images/eci-logo.png"
                alt="ECI Logo"
                width={36}
                height={36}
                className="w-9 h-9 brightness-0 invert"
              />
              <div className="font-heading font-bold text-white">
                <div className="text-md leading-tight">Election Commission</div>
                <div className="text-xs leading-tight">of India</div>
              </div>
            </div>
            <p className="text-neutral-light/80 text-sm">
              The Election Commission of India is a permanent constitutional body responsible for administering election processes in India.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/results" className="text-neutral-light/80 hover:text-white transition-colors">Election Results</Link></li>
              <li><Link href="/voter-services" className="text-neutral-light/80 hover:text-white transition-colors">Voter Services</Link></li>
              <li><Link href="/about" className="text-neutral-light/80 hover:text-white transition-colors">About ECI</Link></li>
              <li><Link href="/media" className="text-neutral-light/80 hover:text-white transition-colors">Media & Publications</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/electoral-laws" className="text-neutral-light/80 hover:text-white transition-colors">Electoral Laws</Link></li>
              <li><Link href="/forms" className="text-neutral-light/80 hover:text-white transition-colors">Forms & Downloads</Link></li>
              <li><Link href="/faqs" className="text-neutral-light/80 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/glossary" className="text-neutral-light/80 hover:text-white transition-colors">Glossary</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-neutral-light/80 text-sm space-y-2">
              <p>Election Commission of India</p>
              <p>Nirvachan Sadan, Ashoka Road</p>
              <p>New Delhi - 110001</p>
              <p className="pt-2">
                <a href="tel:+911123052205" className="hover:text-white transition-colors">+91-11-23052205</a>
              </p>
              <p>
                <a href="mailto:contact@eci.gov.in" className="hover:text-white transition-colors">contact@eci.gov.in</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-neutral-light/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-light/60">
            © {new Date().getFullYear()} Election Commission of India. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-neutral-light/60 hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-neutral-light/60 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-neutral-light/60 hover:text-white transition-colors">
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
