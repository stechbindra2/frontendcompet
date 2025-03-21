import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    { id: 'general', name: 'General Information' },
    { id: 'registration', name: 'Voter Registration' },
    { id: 'voting', name: 'Voting Process' },
    { id: 'candidates', name: 'Candidates & Parties' },
    { id: 'results', name: 'Election Results' },
    { id: 'technical', name: 'Technical Queries' }
  ];
  
  const allFaqs = {
    general: [
      {
        question: "What is the role of the Election Commission of India?",
        answer: "The Election Commission of India (ECI) is an autonomous constitutional authority responsible for administering election processes in India. It supervises, directs, and controls the preparation of electoral rolls, conducts elections to Parliament, State Legislatures, and for the positions of President and Vice-President."
      },
      {
        question: "How are Election Commissioners appointed?",
        answer: "The President of India appoints the Chief Election Commissioner and Election Commissioners. They have a tenure of six years, or up to the age of 65 years, whichever is earlier."
      },
      {
        question: "How many parliamentary constituencies are there in India?",
        answer: "There are 543 parliamentary constituencies in India, which elect members to the Lok Sabha (House of the People)."
      }
    ],
    registration: [
      {
        question: "Who is eligible to register as a voter in India?",
        answer: "Any Indian citizen who has attained the age of 18 years on the qualifying date (1st of January of the year of revision of electoral roll) is eligible to be registered as a voter, unless disqualified under any law."
      },
      {
        question: "How can I register myself as a voter?",
        answer: "You can register as a voter by filling Form 6, which is available online on the National Voters' Service Portal (NVSP), Voter Helpline App, or can be submitted offline at your nearest Electoral Registration Office."
      },
      {
        question: "How can I check if my name is on the voter list?",
        answer: "You can check your name on the electoral roll by visiting the NVSP portal, using the Voter Helpline App, or by sending an SMS to the designated number with your EPIC number."
      }
    ],
    voting: [
      {
        question: "What is an Electronic Voting Machine (EVM)?",
        answer: "An Electronic Voting Machine (EVM) is an electronic device used for recording votes. It consists of a Control Unit and a Balloting Unit, which are connected by a cable. The Control Unit is operated by the polling officer, while the Balloting Unit is placed in the voting compartment for voters to cast their votes."
      },
      {
        question: "What is VVPAT?",
        answer: "The Voter Verifiable Paper Audit Trail (VVPAT) is a system which gives feedback to voters, enabling them to verify that their vote has been cast correctly. When a vote is cast on an EVM, a slip is printed on the VVPAT printer containing the serial number, name, and symbol of the candidate voted for, which is visible to the voter for 7 seconds before it gets cut and falls into a sealed box."
      },
      {
        question: "What identification documents are required to vote?",
        answer: "Voters need to carry their Voter ID card (EPIC) or any of the alternative photo identity documents approved by the Election Commission, such as Aadhaar Card, Passport, Driving License, PAN Card, etc."
      }
    ],
    candidates: [
      {
        question: "What are the eligibility criteria for contesting elections in India?",
        answer: "For Lok Sabha elections, a candidate must be a citizen of India, at least 25 years of age, and should not hold any office of profit under the government. The candidate should not be insolvent, of unsound mind, or convicted for certain types of offenses."
      },
      {
        question: "How are election symbols allotted to political parties?",
        answer: "The Election Commission of India allots symbols to political parties as per the Election Symbols (Reservation and Allotment) Order, 1968. National and State parties are given 'reserved' symbols, while registered unrecognized parties and independent candidates are allotted 'free' symbols from a predetermined list."
      },
      {
        question: "What is the process for recognizing a political party?",
        answer: "A political party is recognized as a National or State party based on their performance in Lok Sabha or State Legislative Assembly elections. The criteria include securing a minimum percentage of valid votes polled or winning a minimum number of seats."
      }
    ],
    results: [
      {
        question: "How and when are election results declared?",
        answer: "Election results are declared on the counting day, which is usually scheduled a few days after the last phase of voting. Counting of votes takes place at designated counting centers under heavy security and surveillance. Results are announced progressively as the counting proceeds."
      },
      {
        question: "What is the process of counting VVPAT slips?",
        answer: "The Supreme Court has mandated that VVPAT slips from five randomly selected polling stations per assembly segment must be counted and matched with the EVM results. If there is any discrepancy between the VVPAT count and the EVM count, the VVPAT count prevails."
      },
      {
        question: "Where can I find the latest election results?",
        answer: "The latest election results can be found on the Election Commission of India's official website, Voter Helpline App, and through various news media outlets during election result day."
      }
    ],
    technical: [
      {
        question: "How secure are Electronic Voting Machines (EVMs)?",
        answer: "EVMs are designed to be standalone machines that are not connected to any network, making them immune to hacking. They use one-time programmable chips which cannot be reprogrammed after manufacturing. The machines undergo rigorous checks, including randomized allocation, mock polls, and candidate verification before actual use."
      },
      {
        question: "What happens if an EVM malfunctions during voting?",
        answer: "If an EVM malfunctions during voting, it is replaced with a new one, and voting continues. The votes recorded in the malfunctioned EVM are preserved and counted along with other votes."
      },
      {
        question: "Can EVMs be tampered with?",
        answer: "The Election Commission of India maintains that EVMs cannot be tampered with, as they are standalone devices with no wireless connectivity or network capability. Multiple levels of technical and administrative safeguards are in place to ensure their integrity."
      }
    ]
  };
  
  // Filter FAQs based on search query
  const filteredFaqs = searchQuery 
    ? Object.values(allFaqs).flat().filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allFaqs[activeCategory];

  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Election Commission of India</title>
        <meta name="description" content="Find answers to commonly asked questions about elections, voter registration, and the electoral process in India." />
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
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Find answers to common questions about India's electoral system
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for questions or keywords..."
                  className="input-field pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg className="w-5 h-5 text-neutral-dark/50 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-dark/50 hover:text-neutral-dark"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            
            {/* Category Tabs */}
            {!searchQuery && (
              <div className="mb-8 overflow-x-auto">
                <div className="flex space-x-2 min-w-max">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeCategory === category.id
                          ? 'bg-primary text-white'
                          : 'bg-neutral-light hover:bg-neutral text-neutral-dark'
                      }`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* FAQ Accordions */}
            <div className="space-y-4">
              {searchQuery && filteredFaqs.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 mx-auto text-neutral-dark/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 2a10 10 0 110 20 10 10 0 010-20z" />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">No results found</h3>
                  <p className="text-neutral-dark/70">We couldn't find any FAQs matching your search query. Please try a different search term.</p>
                </div>
              ) : (
                filteredFaqs.map((faq, index) => (
                  <FaqItem key={index} faq={faq} index={index} />
                ))
              )}
            </div>
            
            {/* Contact Section */}
            <div className="mt-12 p-6 bg-neutral-light rounded-lg">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Couldn't find what you're looking for?</h3>
                <p className="mb-4">Contact us directly for specific queries or additional information</p>
                <Link href="/contact" className="btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-neutral rounded-lg overflow-hidden"
    >
      <button
        className="w-full px-6 py-4 flex justify-between items-center bg-white text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-bold pr-8">{faq.question}</h3>
        <svg
          className={`w-6 h-6 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 bg-neutral-light/50 border-t border-neutral">
          <p className="text-neutral-dark/90">{faq.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
