import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };
  
  const offices = [
    {
      name: "Headquarters",
      address: "Election Commission of India, Nirvachan Sadan, Ashoka Road, New Delhi - 110001",
      phone: "+91-11-23052205",
      email: "contact@eci.gov.in",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9424043224557!2d77.21272731500876!3d28.62516718242349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd07d3d39127%3A0xde5a0c432deaf2f!2sElection%20Commission%20of%20India!5e0!3m2!1sen!2sin!4v1623247837927!5m2!1sen!2sin"
    }
  ];
  
  const helplines = [
    { name: "Voter Helpline", number: "1950", description: "For all voter-related queries and information" },
    { name: "ECI Main Control Room", number: "011-23052950", description: "For general inquiries and information" },
    { name: "Election Complaints", number: "011-23052952", description: "To report electoral violations and complaints" },
    { name: "National Grievance Services", number: "011-23052023", description: "For addressing voter grievances" }
  ];

  return (
    <>
      <Head>
        <title>Contact Us | Election Commission of India</title>
        <meta name="description" content="Get in touch with the Election Commission of India. Find contact information, addresses, and helpline numbers." />
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
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Reach out to the Election Commission of India for assistance and information
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {submitSuccess ? (
                <motion.div 
                  className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex">
                    <svg className="h-5 w-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Your message has been sent successfully. We'll get back to you soon.</span>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-neutral-dark mb-1">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className={`input-field ${errors.firstName ? 'border-red-500' : ''}`}
                        {...register('firstName', { required: 'First name is required' })}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-neutral-dark mb-1">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className={`input-field ${errors.lastName ? 'border-red-500' : ''}`}
                        {...register('lastName', { required: 'Last name is required' })}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-dark mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className={`input-field ${errors.subject ? 'border-red-500' : ''}`}
                      {...register('subject', { required: 'Subject is required' })}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`input-field ${errors.message ? 'border-red-500' : ''}`}
                      {...register('message', { 
                        required: 'Message is required',
                        minLength: {
                          value: 20,
                          message: 'Message should be at least 20 characters'
                        }
                      })}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="btn-primary w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Our Office</h3>
                
                {offices.map((office) => (
                  <div key={office.name} className="bg-neutral-light rounded-lg p-6 mb-4">
                    <h4 className="font-medium text-primary mb-2">{office.name}</h4>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-neutral-dark mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-neutral-dark/80">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-neutral-dark mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-neutral-dark/80">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-neutral-dark mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-neutral-dark/80">{office.email}</span>
                      </div>
                    </div>
                    
                    <div className="w-full h-48 rounded overflow-hidden">
                      <iframe
                        src={office.map}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title={`${office.name} Map`}
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Helpline Numbers</h3>
                <div className="bg-neutral-light rounded-lg p-6">
                  <ul className="space-y-4">
                    {helplines.map((helpline) => (
                      <li key={helpline.name} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                          <div className="font-medium">{helpline.name}: <span className="text-primary">{helpline.number}</span></div>
                          <p className="text-sm text-neutral-dark/70">{helpline.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices Section */}
      <section className="section bg-neutral-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Regional Offices</h2>
            <p className="text-neutral-dark/80">
              The Election Commission of India has regional offices across the country to better serve citizens
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['North', 'South', 'East', 'West'].map((region) => (
              <div key={region} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{region} Region</h3>
                <address className="not-italic text-neutral-dark/80 text-sm space-y-2">
                  <p>Regional Commissioner</p>
                  <p>Election Commission of India</p>
                  <p>{region} Regional Office</p>
                  <p className="pt-2">
                    <a href="tel:+911123052XXX" className="hover:text-primary transition-colors">+91-11-23052XXX</a>
                  </p>
                  <p>
                    <a href={`mailto:${region.toLowerCase()}@eci.gov.in`} className="hover:text-primary transition-colors">
                      {region.toLowerCase()}@eci.gov.in
                    </a>
                  </p>
                </address>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-dark/80">
              Find answers to commonly asked questions about contacting and interacting with the Election Commission
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "How can I submit a complaint about electoral malpractice?",
                  answer: "You can submit complaints through our online portal, by calling our Election Complaints helpline at 011-23052952, or by visiting your nearest Election Commission office."
                },
                {
                  question: "What is the response time for queries submitted through the contact form?",
                  answer: "We aim to respond to all queries within 48-72 hours. For urgent matters, please contact our helpline directly."
                },
                {
                  question: "How can I reach the State Election Commission?",
                  answer: "State Election Commissions are separate bodies responsible for conducting elections to local bodies. You can find contact information for your State Election Commission on their respective websites."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-neutral-light rounded-lg p-6"
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
          </div>
        </div>
      </section>
    </>
  );
}
