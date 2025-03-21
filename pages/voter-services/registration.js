import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

export default function Registration() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formStep, setFormStep] = useState(0);
  
  const onSubmit = (data) => {
    console.log(data);
    setFormStep(3);
  };
  
  return (
    <>
      <Head>
        <title>Voter Registration | Election Commission of India</title>
        <meta name="description" content="Register as a new voter, update your existing voter information, or check your registration status." />
      </Head>
      
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-12">
        <div className="container">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Voter Registration
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Register as a new voter, update your existing voter information, or check your registration status
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="#form" className="btn bg-white text-primary hover:bg-neutral-light">
                Start Registration
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section id="form" className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-neutral-light rounded-lg p-6 mb-10">
              <h2 className="text-xl font-bold mb-4">Voter Registration Form</h2>
              
              {formStep === 0 && (
                <form onSubmit={handleSubmit(() => setFormStep(1))} className="space-y-4">
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
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark mb-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                      {...register('phone', { 
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: 'Invalid phone number'
                        }
                      })}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <button type="submit" className="btn-primary">
                      Next
                    </button>
                  </div>
                </form>
              )}
              
              {formStep === 1 && (
                <form onSubmit={handleSubmit(() => setFormStep(2))} className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-neutral-dark mb-1">
                      Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      className={`input-field ${errors.address ? 'border-red-500' : ''}`}
                      {...register('address', { required: 'Address is required' })}
                    />
                    {errors.address && (
                      <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-neutral-dark mb-1">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      className={`input-field ${errors.city ? 'border-red-500' : ''}`}
                      {...register('city', { required: 'City is required' })}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-neutral-dark mb-1">
                      State
                    </label>
                    <input
                      id="state"
                      type="text"
                      className={`input-field ${errors.state ? 'border-red-500' : ''}`}
                      {...register('state', { required: 'State is required' })}
                    />
                    {errors.state && (
                      <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-neutral-dark mb-1">
                      ZIP Code
                    </label>
                    <input
                      id="zip"
                      type="text"
                      className={`input-field ${errors.zip ? 'border-red-500' : ''}`}
                      {...register('zip', { 
                        required: 'ZIP code is required',
                        pattern: {
                          value: /^[0-9]{6}$/,
                          message: 'Invalid ZIP code'
                        }
                      })}
                    />
                    {errors.zip && (
                      <p className="text-red-500 text-xs mt-1">{errors.zip.message}</p>
                    )}
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={() => setFormStep(0)}
                      className="btn border border-neutral bg-white hover:bg-neutral-light text-neutral-dark"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Back
                    </button>
                    
                    <button type="submit" className="btn-primary">
                      Next
                    </button>
                  </div>
                </form>
              )}
              
              {formStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="identityProof" className="block text-sm font-medium text-neutral-dark mb-1">
                      Identity Proof
                    </label>
                    <input
                      id="identityProof"
                      type="file"
                      className={`input-field ${errors.identityProof ? 'border-red-500' : ''}`}
                      {...register('identityProof', { required: 'Identity proof is required' })}
                    />
                    {errors.identityProof && (
                      <p className="text-red-500 text-xs mt-1">{errors.identityProof.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="addressProof" className="block text-sm font-medium text-neutral-dark mb-1">
                      Address Proof
                    </label>
                    <input
                      id="addressProof"
                      type="file"
                      className={`input-field ${errors.addressProof ? 'border-red-500' : ''}`}
                      {...register('addressProof', { required: 'Address proof is required' })}
                    />
                    {errors.addressProof && (
                      <p className="text-red-500 text-xs mt-1">{errors.addressProof.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="photo" className="block text-sm font-medium text-neutral-dark mb-1">
                      Recent Passport Size Photograph
                    </label>
                    <input
                      id="photo"
                      type="file"
                      className={`input-field ${errors.photo ? 'border-red-500' : ''}`}
                      {...register('photo', { required: 'Photograph is required' })}
                    />
                    {errors.photo && (
                      <p className="text-red-500 text-xs mt-1">{errors.photo.message}</p>
                    )}
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={() => setFormStep(1)}
                      className="btn border border-neutral bg-white hover:bg-neutral-light text-neutral-dark"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      Back
                    </button>
                    
                    <button
                      onClick={() => setFormStep(3)}
                      className="btn-primary"
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              )}
              
              {formStep === 3 && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">Application Submitted Successfully!</h3>
                  <p className="text-neutral-dark/80 mb-8">
                    Your voter registration application has been submitted successfully. You will receive a confirmation on your registered mobile number and email.
                  </p>
                  
                  <div className="bg-neutral-light/50 p-6 rounded-lg max-w-md mx-auto mb-6">
                    <div className="text-left space-y-2">
                      <div>
                        <span className="text-sm text-neutral-dark/70">Application Reference ID:</span>
                        <p className="font-bold">ECI-REG-2024-123456</p>
                      </div>
                      <div>
                        <span className="text-sm text-neutral-dark/70">Submitted Date:</span>
                        <p className="font-bold">{new Date().toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/" className="btn-primary">
                      Back to Home
                    </Link>
                    <button 
                      onClick={() => setFormStep(0)}
                      className="btn bg-neutral text-white hover:bg-neutral-dark"
                    >
                      Register Another Voter
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Help Section */}
            <div className="bg-neutral-light rounded-lg p-6 mb-10">
              <h2 className="text-xl font-bold mb-4">Need Help?</h2>
              
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg">
                  <h3 className="flex items-center text-lg font-medium mb-2">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Documents Required
                  </h3>
                  <ul className="space-y-2 text-neutral-dark/80">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Identity Proof (Aadhaar Card, Passport, Driving License, PAN Card, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Address Proof (Utility Bills, Bank Statement, Property Tax Receipt, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Recent Passport Size Photograph</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Age Proof (Birth Certificate, 10th Certificate, etc.) if Aadhaar not provided</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-5 rounded-lg">
                  <h3 className="flex items-center text-lg font-medium mb-2">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Frequently Asked Questions
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">How long does the registration process take?</h4>
                      <p className="text-sm text-neutral-dark/80">The verification and approval process typically takes 2-4 weeks after submission of your application.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Can I track my application status?</h4>
                      <p className="text-sm text-neutral-dark/80">Yes, you can track your application status using the reference ID provided after submission.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">What if I don't have all the required documents?</h4>
                      <p className="text-sm text-neutral-dark/80">Contact your local Electoral Registration Officer for guidance on alternative documents that may be accepted.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Link href="/faqs" className="btn-primary">
                  View All FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}