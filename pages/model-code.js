import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ModelCode() {
  return (
    <>
      <Head>
        <title>Model Code of Conduct | Election Commission of India</title>
        <meta name="description" content="Learn about the Model Code of Conduct for political parties and candidates during elections in India." />
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
              Model Code of Conduct
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Guidelines for fair and peaceful electoral process
            </motion.p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose">
              <h2 className="text-3xl font-bold mb-6">What is the Model Code of Conduct?</h2>
              
              <p className="mb-4">
                The Model Code of Conduct (MCC) is a set of guidelines issued by the Election Commission of India to regulate political parties and candidates prior to elections, to ensure free and fair elections. It is intended to provide a level playing field for all political parties, keep the campaign fair and healthy, avoid clashes and conflicts between parties, and ensure peace and order.
              </p>
              
              <p className="mb-4">
                The Model Code of Conduct comes into force immediately on announcement of the election schedule by the Election Commission and remains in force till the end of the electoral process.
              </p>
              
              <div className="bg-neutral-light rounded-lg p-6 my-8 border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-2">Key Objectives</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ensure peaceful and orderly elections</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Prevent abuse of power by the ruling party</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Maintain a healthy and open democratic process</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Provide equal opportunities to all political parties</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Provisions */}
      <section className="section bg-neutral-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Main Provisions of the Code</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">1. General Conduct</h3>
                <ul className="space-y-2">
                  <li className="text-neutral-dark/80">No party or candidate shall indulge in any activity which may aggravate existing differences or create mutual hatred.</li>
                  <li className="text-neutral-dark/80">Criticism of other parties shall be confined to policies and programs.</li>
                  <li className="text-neutral-dark/80">There shall be no appeal to caste or communal feelings for securing votes.</li>
                  <li className="text-neutral-dark/80">Places of worship shall not be used as a forum for election propaganda.</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">2. Meetings and Processions</h3>
                <ul className="space-y-2">
                  <li className="text-neutral-dark/80">Parties must inform the local police about public meetings and processions.</li>
                  <li className="text-neutral-dark/80">Parties must seek necessary permissions in advance for using loudspeakers or any other facility.</li>
                  <li className="text-neutral-dark/80">Competing parties should not hold public meetings on the same route or in the same area on the same day.</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">3. Polling Day</h3>
                <ul className="space-y-2">
                  <li className="text-neutral-dark/80">All parties and candidates shall cooperate with the officers on election duty.</li>
                  <li className="text-neutral-dark/80">No person shall create disturbances at polling stations.</li>
                  <li className="text-neutral-dark/80">Candidates should supply voters with authorized identity slips only.</li>
                  <li className="text-neutral-dark/80">No canvassing shall be allowed within 100 meters of polling stations.</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">4. Party in Power</h3>
                <ul className="space-y-2">
                  <li className="text-neutral-dark/80">Ministers shall not combine official visits with electioneering work.</li>
                  <li className="text-neutral-dark/80">Government machinery or personnel shall not be used for electioneering.</li>
                  <li className="text-neutral-dark/80">No advertisements at the cost of public exchequer regarding achievements of the ruling party.</li>
                  <li className="text-neutral-dark/80">Ministers shall not announce financial grants or promises that may influence voters.</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">5. Guidelines on Election Manifesto</h3>
                <ul className="space-y-2">
                  <li className="text-neutral-dark/80">Manifestos should not contain anything repugnant to the Constitution of India.</li>
                  <li className="text-neutral-dark/80">Promises made should be realistic and implementable within fiscal means.</li>
                  <li className="text-neutral-dark/80">Parties should indicate the means to achieve promises involving financial implications.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enforcement Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Enforcement Mechanisms</h2>
                <p className="mb-4">
                  The Election Commission of India ensures compliance with the Model Code of Conduct through various mechanisms:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span><strong>Flying Squads:</strong> Special teams that investigate violations and take immediate action</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span><strong>Expenditure Monitoring:</strong> Teams that track campaign expenditures of candidates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span><strong>Media Monitoring:</strong> Monitoring of electronic and print media for paid news or violations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span><strong>Public Complaints:</strong> Mechanisms for citizens to report violations through helplines and portals</span>
                  </li>
                </ul>
              </div>
              <div className="order-first md:order-last">
                <Image 
                  src="/images/mcc-enforcement.jpg"
                  alt="ECI Officials Monitoring Elections"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="section bg-neutral-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Downloads & Resources</h2>
            <p className="text-neutral-dark/80 mb-8">
              Access the full text of the Model Code of Conduct and related resources.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <svg className="w-12 h-12 text-primary mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-bold mb-2">Complete MCC Document</h3>
                <p className="text-sm text-neutral-dark/70 mb-4">
                  Download the full text of the Model Code of Conduct in PDF format.
                </p>
                <Link href="/documents/model-code-of-conduct.pdf" className="btn-primary text-sm">
                  Download PDF
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <svg className="w-12 h-12 text-primary mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-bold mb-2">Latest Amendments</h3>
                <p className="text-sm text-neutral-dark/70 mb-4">
                  Access the recent amendments and clarifications to the Model Code.
                </p>
                <Link href="/documents/mcc-amendments.pdf" className="btn-primary text-sm">
                  View Amendments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  question: "When does the Model Code of Conduct come into effect?",
                  answer: "The Model Code of Conduct comes into force immediately when the Election Commission announces the election schedule. It remains in effect until the election process is completed."
                },
                {
                  question: "Does the Model Code of Conduct have legal backing?",
                  answer: "The Model Code of Conduct does not have statutory backing. However, certain provisions of the MCC may be enforced through various laws such as the Indian Penal Code, Code of Criminal Procedure, and Representation of the People Act."
                },
                {
                  question: "How can citizens report violations of the Model Code of Conduct?",
                  answer: "Citizens can report violations through the cVIGIL mobile app, by calling the election helpline 1950, or by submitting a complaint at the nearest electoral office or on the Election Commission's website."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-neutral-light p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-neutral-dark/80">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/faqs" className="btn-primary">
                View More FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
