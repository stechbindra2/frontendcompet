import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedLinks() {
  const features = [
    {
      title: "Voter Registration",
      description: "Register as a voter or check your registration status online.",
      icon: "/images/icons/voter-registration.svg",
      link: "/voter-services/registration",
      color: "bg-blue-100"
    },
    {
      title: "Find Your Polling Station",
      description: "Locate your designated polling station with ease.",
      icon: "/images/icons/polling-station.svg",
      link: "/voter-services/polling-station",
      color: "bg-green-100"
    },
    {
      title: "Electoral Roll",
      description: "View and download electoral rolls for your constituency.",
      icon: "/images/icons/electoral-roll.svg",
      link: "/voter-services/electoral-roll",
      color: "bg-purple-100"
    },
    {
      title: "Election Timeline",
      description: "View the schedule of upcoming and past elections.",
      icon: "/images/icons/election-timeline.svg",
      link: "/election-timeline",
      color: "bg-amber-100"
    }
  ];
  
  const quickLinks = [
    { title: "Political Parties", link: "/political-parties" },
    { title: "Model Code of Conduct", link: "/model-code" },
    { title: "FAQs", link: "/faqs" },
    { title: "Publications", link: "/publications" },
    { title: "Press Releases", link: "/press-releases" },
    { title: "Contact ECI", link: "/contact" }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Voter Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className={`${feature.color} rounded-lg p-6 transition-shadow hover:shadow-md`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="bg-white rounded-full p-3 mr-4 shadow-sm">
                      <Image 
                        src={feature.icon}
                        alt={feature.title}
                        width={32}
                        height={32}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-neutral-dark/80 text-sm mb-3">{feature.description}</p>
                      <Link href={feature.link} className="text-primary hover:text-primary-dark text-sm font-medium inline-flex items-center">
                        Access Service
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-neutral-light rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link 
                      href={link.link}
                      className="flex items-center py-2 px-3 hover:bg-white rounded-md transition-colors"
                    >
                      <svg className="w-4 h-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Download ECI Mobile App</h3>
              <p className="text-white/80 mb-4 text-sm">
                Get instant access to voter services, election results, and notifications on your mobile device.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <button className="flex items-center bg-white text-primary px-3 py-2 rounded shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.65,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z" />
                  </svg>
                  Android
                </button>
                
                <button className="flex items-center bg-white text-primary px-3 py-2 rounded shadow-sm hover:shadow-md transition-shadow">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  iOS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
