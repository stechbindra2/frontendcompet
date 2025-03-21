import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Media() {
  const [activeTab, setActiveTab] = useState('press-releases');
  const [searchQuery, setSearchQuery] = useState('');
  
  const tabContent = {
    'press-releases': {
      title: "Press Releases",
      items: [
        {
          title: "ECI Announces Schedule for Assembly Elections in State X",
          date: "May 20, 2024",
          category: "Announcement",
          description: "The Election Commission of India today announced the schedule for Assembly Elections in State X. Voting will be conducted in 3 phases starting June 10, 2024.",
          link: "/media/press-releases/schedule-state-x"
        },
        {
          title: "Deployment of Central Forces for Sixth Phase of Elections",
          date: "May 18, 2024",
          category: "Security",
          description: "The Commission has decided to deploy 200 companies of Central Armed Police Forces for the sixth phase of General Elections 2024 to ensure free and fair elections.",
          link: "/media/press-releases/central-forces-deployment"
        },
        {
          title: "ECI's Statement on Allegations of EVM Tampering",
          date: "May 15, 2024",
          category: "Clarification",
          description: "The Election Commission of India refutes all allegations regarding EVM tampering and reiterates that the integrity of the electoral process is fully maintained.",
          link: "/media/press-releases/evm-statement"
        },
        {
          title: "Record Voter Turnout in Phase 5 of Lok Sabha Elections",
          date: "May 12, 2024",
          category: "Statistics",
          description: "The fifth phase of Lok Sabha Elections 2024 witnessed a record turnout of 68.5%, the highest in the last three general elections for the corresponding constituencies.",
          link: "/media/press-releases/turnout-phase5"
        }
      ]
    },
    'publications': {
      title: "Publications",
      items: [
        {
          title: "Statistical Report on General Elections 2019",
          date: "January 15, 2020",
          category: "Report",
          description: "Comprehensive statistical analysis of the 2019 General Elections including voter turnout, constituency-wise results, and demographic patterns.",
          link: "/media/publications/statistical-report-2019"
        },
        {
          title: "Handbook for Returning Officers",
          date: "February 10, 2024",
          category: "Manual",
          description: "Updated handbook containing detailed instructions and guidelines for Returning Officers for the conduct of elections.",
          link: "/media/publications/returning-officers-handbook"
        },
        {
          title: "Systematic Voters' Education and Electoral Participation (SVEEP) Report",
          date: "December 5, 2023",
          category: "Report",
          description: "Report on the SVEEP initiatives undertaken to enhance voter awareness and participation in the electoral process.",
          link: "/media/publications/sveep-report"
        },
        {
          title: "Compendium of Instructions on Election Expenditure Monitoring",
          date: "March 20, 2024",
          category: "Guidelines",
          description: "Compilation of instructions issued by ECI on monitoring election expenditure of political parties and candidates.",
          link: "/media/publications/expenditure-monitoring"
        }
      ]
    },
    'gallery': {
      title: "Photo & Video Gallery",
      items: [
        {
          title: "Voters at Polling Stations - Phase 4",
          date: "May 5, 2024",
          category: "Photo Gallery",
          description: "Photos of voters enthusiastically participating in the fourth phase of General Elections 2024 across various states.",
          link: "/media/gallery/voters-phase4",
          thumbnail: "/images/gallery/voters-phase4.jpg"
        },
        {
          title: "EVM Awareness Campaign",
          date: "April 12, 2024",
          category: "Video",
          description: "Video documentary on the EVM awareness campaign conducted by the Election Commission in rural areas.",
          link: "/media/gallery/evm-awareness",
          thumbnail: "/images/gallery/evm-awareness.jpg"
        },
        {
          title: "National Voters' Day Celebration",
          date: "January 25, 2024",
          category: "Photo Gallery",
          description: "Photos from the National Voters' Day celebrations held across the country to encourage voter participation.",
          link: "/media/gallery/voters-day-2024",
          thumbnail: "/images/gallery/voters-day.jpg"
        },
        {
          title: "Inaugural Session: International Conference on Electoral Technology",
          date: "March 3, 2024",
          category: "Video",
          description: "Video of the inaugural session of the International Conference on Electoral Technology hosted by the Election Commission of India.",
          link: "/media/gallery/electoral-tech-conference",
          thumbnail: "/images/gallery/electoral-tech.jpg"
        }
      ]
    },
    'speeches': {
      title: "Speeches & Statements",
      items: [
        {
          title: "Address by the Chief Election Commissioner on National Voters' Day",
          date: "January 25, 2024",
          category: "Speech",
          description: "Full text of the address delivered by the Chief Election Commissioner during the 14th National Voters' Day celebrations.",
          link: "/media/speeches/cec-voters-day-2024"
        },
        {
          title: "Statement on the COVID-19 Safety Protocols for Elections",
          date: "April 2, 2024",
          category: "Statement",
          description: "Official statement outlining the COVID-19 safety protocols to be followed during the electoral process.",
          link: "/media/speeches/covid-protocols"
        },
        {
          title: "Address at the International Conference on Electoral Technology",
          date: "March 3, 2024",
          category: "Speech",
          description: "Speech by the Chief Election Commissioner at the International Conference on Electoral Technology held in New Delhi.",
          link: "/media/speeches/cec-tech-conference"
        },
        {
          title: "Statement on the Use of Social Media in Election Campaigns",
          date: "February 15, 2024",
          category: "Statement",
          description: "Official statement regarding the guidelines for the use of social media by political parties and candidates during election campaigns.",
          link: "/media/speeches/social-media-guidelines"
        }
      ]
    }
  };
  
  // Filter items based on search query if one exists
  const filteredItems = searchQuery && activeTab ? 
    tabContent[activeTab].items.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    ) : (activeTab ? tabContent[activeTab].items : []);
  
  return (
    <>
      <Head>
        <title>Media & Publications | Election Commission of India</title>
        <meta name="description" content="Access press releases, publications, photo galleries, and official statements from the Election Commission of India." />
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
              Media & Publications
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Official communications, resources, and multimedia content from the Election Commission
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          {/* Tabs */}
          <div className="mb-8 border-b border-neutral">
            <nav className="flex flex-wrap -mb-px">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  className={`mr-2 inline-flex items-center py-4 px-4 border-b-2 font-medium text-sm sm:text-base transition-colors ${
                    activeTab === tab
                      ? 'border-primary text-primary'
                      : 'border-transparent text-neutral-dark hover:text-primary hover:border-neutral'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tabContent[tab].title}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Search and Title */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
              <h2 className="text-2xl font-bold">{tabContent[activeTab].title}</h2>
              
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder={`Search ${tabContent[activeTab].title.toLowerCase()}...`}
                  className="input-field py-2 px-4 pl-10 text-sm w-full"
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
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            
            {/* Gallery View */}
            {activeTab === 'gallery' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="bg-neutral-light rounded-lg overflow-hidden shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="relative h-48">
                        <Image 
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          objectFit="cover"
                        />
                        <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                          {item.category}
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="text-xs text-neutral-dark/60 mb-1">{item.date}</div>
                        <h3 className="font-bold mb-2 line-clamp-2">{item.title}</h3>
                        <p className="text-sm text-neutral-dark/80 mb-3 line-clamp-2">{item.description}</p>
                        <Link href={item.link} className="text-primary hover:text-primary-dark text-sm font-medium inline-flex items-center">
                          View Gallery
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <svg className="w-16 h-16 mx-auto text-neutral-dark/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-xl font-bold mb-2">No items found</h3>
                    <p className="text-neutral-dark/70">No items match your search criteria. Please try a different search term.</p>
                  </div>
                )}
              </div>
            ) : (
              // List View for other tabs
              <div className="space-y-6">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="bg-neutral-light rounded-lg p-6 hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <div className="text-sm text-neutral-dark/60 mb-2">{item.date}</div>
                      <p className="text-neutral-dark/80 mb-4">{item.description}</p>
                      <Link href={item.link} className="text-primary hover:text-primary-dark text-sm font-medium inline-flex items-center">
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 mx-auto text-neutral-dark/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 2a10 10 0 110 20 10 10 0 010-20z" />
                    </svg>
                    <h3 className="text-xl font-bold mb-2">No items found</h3>
                    <p className="text-neutral-dark/70">No items match your search criteria. Please try a different search term.</p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
          
          {/* Pagination */}
          <div className="mt-10 flex justify-center">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-neutral bg-white text-sm font-medium text-neutral-dark hover:bg-neutral-light">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-neutral bg-white text-sm font-medium text-neutral-dark hover:bg-neutral-light">1</a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-neutral bg-primary text-sm font-medium text-white">2</a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-neutral bg-white text-sm font-medium text-neutral-dark hover:bg-neutral-light">3</a>
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-neutral bg-white text-sm font-medium text-neutral-dark hover:bg-neutral-light">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </section>
      
      {/* Archives Section */}
      <section className="section bg-neutral-light">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl font-bold mb-4">Archives</h2>
            <p className="text-neutral-dark/80">
              Access our comprehensive collection of historical records, past press releases, and publications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <svg className="w-12 h-12 mx-auto text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Historical Election Data</h3>
              <p className="text-neutral-dark/80 mb-4">Access detailed election statistics, results, and analysis from previous elections dating back to 1951.</p>
              <Link href="/archives/election-data" className="btn-primary text-sm">
                Browse Archive
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <svg className="w-12 h-12 mx-auto text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Past Publications</h3>
              <p className="text-neutral-dark/80 mb-4">Explore our collection of reports, handbooks, guidelines, and reference materials from previous years.</p>
              <Link href="/archives/publications" className="btn-primary text-sm">
                View Publications
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <svg className="w-12 h-12 mx-auto text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Media Archives</h3>
              <p className="text-neutral-dark/80 mb-4">Discover our extensive collection of photos, videos, and multimedia content from past electoral events.</p>
              <Link href="/archives/media" className="btn-primary text-sm">
                Explore Media
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
