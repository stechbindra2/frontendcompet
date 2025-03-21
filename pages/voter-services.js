import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function VoterServices() {
  const services = [
    {
      title: "Voter Registration",
      description: "Register as a new voter, update your existing voter information, or check your registration status.",
      icon: "/images/icons/voter-registration.svg",
      link: "/voter-services/registration",
      color: "bg-blue-100"
    },
    {
      title: "Find Your Polling Station",
      description: "Locate your designated polling station based on your voter ID or residential address.",
      icon: "/images/icons/polling-station.svg",
      link: "/voter-services/polling-station",
      color: "bg-green-100"
    },
    {
      title: "Electoral Roll",
      description: "View and download electoral rolls for your constituency or check if your name appears on the voter list.",
      icon: "/images/icons/electoral-roll.svg",
      link: "/voter-services/electoral-roll",
      color: "bg-purple-100"
    },
    {
      title: "Voter ID Card",
      description: "Apply for a new voter ID card, request a duplicate, or download your e-EPIC.",
      icon: "/images/icons/voter-id.svg",
      link: "/voter-services/voter-id",
      color: "bg-amber-100"
    },
    {
      title: "Name Change/Address Update",
      description: "Update your personal information including name, address, photo, or other details.",
      icon: "/images/icons/update-info.svg",
      link: "/voter-services/update-info",
      color: "bg-red-100"
    },
    {
      title: "Overseas Voter Registration",
      description: "Indian citizens residing abroad can register as overseas voters through this service.",
      icon: "/images/icons/overseas.svg",
      link: "/voter-services/overseas-registration",
      color: "bg-indigo-100"
    }
  ];

  const faqs = [
    {
      question: "Who is eligible to vote in India?",
      answer: "An Indian citizen who has attained the age of 18 years on the qualifying date (1st of January of the year of revision of electoral roll) is eligible to be registered as a voter."
    },
    {
      question: "How can I register as a voter?",
      answer: "You can register as a voter by filling Form 6 online on the National Voters' Service Portal (NVSP) or through the Voter Helpline App. Alternatively, you can submit the form offline at your nearest Electoral Registration Office."
    },
    {
      question: "How can I check if my name is on the electoral roll?",
      answer: "You can check your name on the electoral roll by visiting the NVSP portal, using the Voter Helpline App, or by sending an SMS to the designated number with your EPIC number."
    }
  ];

  return (
    <>
      <Head>
        <title>Voter Services | Election Commission of India</title>
        <meta name="description" content="Access a wide range of voter services including registration, finding polling stations, and electoral roll verification." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-12">
        <div className="container">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Voter Services
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Empowering citizens with easy access to electoral services and information
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="#services" className="btn bg-white text-primary hover:bg-neutral-light">
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Available Services</h2>
            <p className="text-neutral-dark/80">
              Access a comprehensive range of voter services designed to facilitate your participation in the democratic process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`${service.color} rounded-lg p-6 transition-shadow hover:shadow-md`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <div className="bg-white rounded-full p-3 mr-4 shadow-sm">
                    <Image 
                      src={service.icon}
                      alt={service.title}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                    <p className="text-neutral-dark/80 text-sm mb-3">{service.description}</p>
                    <Link href={service.link} className="btn-primary text-sm">
                      Access Service
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section bg-neutral-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-dark/80">
              Find answers to common questions about voter registration and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-sm p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-neutral-dark/80">{faq.answer}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/faqs" className="btn-primary">
                View All FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Helpline Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="bg-gradient-to-r from-primary-light to-primary rounded-lg text-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
                <p className="mb-6">
                  Our dedicated helpline is available to address your queries related to voter services and electoral processes.
                </p>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-lg">1950 (Toll-Free)</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-lg">helpdesk@eci.gov.in</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Image 
                  src="/images/voter-helpline.png"
                  alt="Voter Helpline"
                  width={300}
                  height={300}
                  className="mx-auto"
                />
                <div className="mt-4">
                  <Link href="/contact" className="btn bg-white text-primary hover:bg-neutral-light">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
