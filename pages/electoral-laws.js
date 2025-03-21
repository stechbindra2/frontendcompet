import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ElectoralLaws() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const laws = [
    {
      title: "Constitution of India",
      sections: "Articles 324-329",
      description: "Provisions related to the Election Commission, its powers, and the conduct of elections for the President, Parliament, and State Legislatures.",
      year: "1950",
      category: "Constitutional",
      link: "/electoral-laws/constitution"
    },
    {
      title: "Representation of the People Act",
      sections: "Act No. 43",
      description: "Deals with the actual conduct of elections, including delimitation of constituencies, qualifications of voters, and procedure for contesting elections.",
      year: "1950",
      category: "Parliamentary",
      link: "/electoral-laws/rpa-1950"
    },
    {
      title: "Representation of the People Act",
      sections: "Act No. 43",
      description: "Addresses corrupt practices, electoral offenses, and resolution of disputes related to elections.",
      year: "1951",
      category: "Parliamentary",
      link: "/electoral-laws/rpa-1951"
    },
    {
      title: "Presidential and Vice-Presidential Elections Act",
      sections: "Act No. 31",
      description: "Regulates the election process for the President and Vice-President of India.",
      year: "1952",
      category: "Parliamentary",
      link: "/electoral-laws/presidential-elections"
    },
    {
      title: "Delimitation Act",
      sections: "Act No. 33",
      description: "Provides for the readjustment of allocation of seats and delimitation of constituencies for elections.",
      year: "2002",
      category: "Parliamentary",
      link: "/electoral-laws/delimitation"
    },
    {
      title: "Conduct of Elections Rules",
      sections: "S.O. 859",
      description: "Detailed rules governing the conduct of elections to Parliament and State Legislatures.",
      year: "1961",
      category: "Rules",
      link: "/electoral-laws/conduct-rules"
    },
    {
      title: "Registration of Electors Rules",
      sections: "S.O. 2750",
      description: "Rules related to the preparation and revision of electoral rolls.",
      year: "1960",
      category: "Rules",
      link: "/electoral-laws/registration-rules"
    },
    {
      title: "Election Symbols (Reservation and Allotment) Order",
      sections: "Order",
      description: "Governs the recognition of political parties and allotment of symbols.",
      year: "1968",
      category: "Order",
      link: "/electoral-laws/symbols-order"
    }
  ];
  
  const filterLaws = laws.filter(law => 
    law.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    law.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    law.year.includes(searchTerm)
  );
  
  return (
    <>
      <Head>
        <title>Electoral Laws | Election Commission of India</title>
        <meta name="description" content="Comprehensive information about the electoral laws of India governing the electoral process." />
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
              Electoral Laws
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              The legal framework governing India's electoral system
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="mb-6">
              India's electoral process is governed by a comprehensive legal framework that ensures free and fair elections. 
              The Constitution of India establishes the foundational principles, while various Acts and Rules provide detailed 
              guidelines for the conduct of elections.
            </p>
            
            <div className="bg-neutral-light p-4 rounded-lg mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search electoral laws..."
                  className="input-field pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg className="w-5 h-5 text-neutral-dark/50 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterLaws.map((law, index) => (
              <motion.div
                key={`${law.title}-${law.year}`}
                className="bg-neutral-light rounded-lg p-6 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold">{law.title}</h2>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{law.year}</span>
                </div>
                <p className="text-sm font-medium text-neutral-dark/70 mb-3">{law.sections}</p>
                <p className="text-neutral-dark/80 mb-4">{law.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-neutral px-2 py-1 rounded-full">{law.category}</span>
                  <Link href={law.link} className="text-primary hover:text-primary-dark text-sm font-medium inline-flex items-center">
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filterLaws.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-neutral-dark/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 2a10 10 0 110 20 10 10 0 010-20z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">No laws found</h3>
              <p className="text-neutral-dark/70">No electoral laws match your search criteria. Please try a different search term.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Model Code Section */}
      <section className="section bg-neutral-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Model Code of Conduct</h2>
              <p className="text-neutral-dark/80">
                The Model Code of Conduct is a set of guidelines issued by the Election Commission for political parties and candidates 
                during elections to ensure free and fair elections
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-bold mb-4">Key Provisions of the Model Code of Conduct</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">1</div>
                  <div>
                    <h4 className="font-bold text-lg">General Conduct</h4>
                    <p className="text-neutral-dark/80">
                      Political parties and candidates should not engage in activities that may aggravate existing differences or create mutual hatred between different communities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">2</div>
                  <div>
                    <h4 className="font-bold text-lg">Meetings and Processions</h4>
                    <p className="text-neutral-dark/80">
                      Parties must inform local police authorities about public meetings and processions to maintain law and order.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">3</div>
                  <div>
                    <h4 className="font-bold text-lg">Polling Day Conduct</h4>
                    <p className="text-neutral-dark/80">
                      All parties and candidates shall cooperate with election officials to ensure peaceful and orderly polling and ensure that voters can freely exercise their right to vote.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-3">4</div>
                  <div>
                    <h4 className="font-bold text-lg">Government Machinery</h4>
                    <p className="text-neutral-dark/80">
                      The ruling party shall not use official machinery for campaign purposes or obtain support for its candidates.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Link href="/model-code" className="btn-primary">
                  View Full Model Code of Conduct
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
