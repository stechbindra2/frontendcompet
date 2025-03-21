import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Updates() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [updates, setUpdates] = useState([]);
  const [filteredUpdates, setFilteredUpdates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const updatesPerPage = 9;
  
  useEffect(() => {
    // In a real app, this would be an API call
    // For this demo, we're using mock data
    const allUpdates = [
      ...getMockUpdates('latest', 5),
      ...getMockUpdates('upcoming', 3),
      ...getMockUpdates('press', 4),
      ...getMockUpdates('notifications', 6),
      ...getMockUpdates('media', 3)
    ];
    
    setUpdates(allUpdates);
  }, []);
  
  useEffect(() => {
    let filtered = updates;
    
    // Filter by category
    if (activeFilter !== 'all') {
      filtered = updates.filter(update => update.category.toLowerCase() === activeFilter);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        update => 
          update.title.toLowerCase().includes(query) ||
          update.description.toLowerCase().includes(query) ||
          update.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredUpdates(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [updates, activeFilter, searchQuery]);
  
  // Get current updates
  const indexOfLastUpdate = currentPage * updatesPerPage;
  const indexOfFirstUpdate = indexOfLastUpdate - updatesPerPage;
  const currentUpdates = filteredUpdates.slice(indexOfFirstUpdate, indexOfLastUpdate);
  const totalPages = Math.ceil(filteredUpdates.length / updatesPerPage);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <>
      <Head>
        <title>Election Updates | Election Commission of India</title>
        <meta name="description" content="Stay informed with the latest updates, announcements, and press releases from the Election Commission of India." />
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
              Election Updates
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Stay informed with the latest developments, announcements, and news
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          {/* Filters and Search */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="overflow-x-auto">
                <div className="flex space-x-2 min-w-max">
                  {['all', 'latest', 'upcoming', 'press', 'notifications', 'media'].map((filter) => (
                    <button
                      key={filter}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeFilter === filter
                          ? 'bg-primary text-white'
                          : 'bg-neutral-light hover:bg-neutral text-neutral-dark'
                      }`}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search updates..."
                  className="input-field py-2 px-4 pl-10 text-sm w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg className="w-5 h-5 text-neutral-dark/50 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            
            {searchQuery && (
              <div className="mb-6">
                <p className="text-sm text-neutral-dark/70">
                  Showing results for <span className="font-medium text-primary">"{searchQuery}"</span> 
                  {activeFilter !== 'all' && <span> in category <span className="font-medium text-primary">{activeFilter}</span></span>}
                </p>
              </div>
            )}
          </div>
          
          {/* Updates Grid */}
          {filteredUpdates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {currentUpdates.map((update, index) => (
                <motion.div
                  key={update.id}
                  className="bg-neutral-light rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  {update.image && (
                    <div className="relative h-48">
                      <Image 
                        src={update.image}
                        alt={update.title}
                        fill
                        objectFit="cover"
                      />
                      <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                        {update.category}
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center text-xs text-neutral-dark/60 mb-2">
                      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(update.date).toLocaleDateString('en-US', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2">{update.title}</h3>
                    <p className="text-sm text-neutral-dark/80 mb-4">{update.description}</p>
                    
                    <Link href={update.link} className="text-primary hover:text-primary-dark text-sm font-medium inline-flex items-center">
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg className="w-16 h-16 mx-auto text-neutral-dark/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 2a10 10 0 110 20 10 10 0 010-20z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">No updates found</h3>
              <p className="text-neutral-dark/70 mb-4">No updates match your current filter criteria.</p>
              <button 
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
          
          {/* Pagination */}
          {filteredUpdates.length > 0 && totalPages > 1 && (
            <div className="flex justify-center">
              <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button
                  className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-neutral bg-white text-sm font-medium text-neutral-dark ${
                    currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-light'
                  }`}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    className={`relative inline-flex items-center px-4 py-2 border border-neutral text-sm font-medium ${
                      currentPage === i + 1
                        ? 'bg-primary text-white'
                        : 'bg-white text-neutral-dark hover:bg-neutral-light'
                    }`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
                
                <button
                  className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-neutral bg-white text-sm font-medium text-neutral-dark ${
                    currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-light'
                  }`}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="section bg-neutral-light">
        <div className="container">
          <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
                <p className="mb-6">
                  Subscribe to our newsletter to receive the latest election updates, announcements, and important information directly to your inbox.
                </p>
              </div>
              
              <div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="input-field py-2 flex-grow"
                    />
                    <button className="btn-primary whitespace-nowrap">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-neutral-dark/70 mt-2">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Mock data generation function
function getMockUpdates(category, count) {
  const baseDate = new Date();
  const updates = [];
  
  const titles = {
    latest: [
      "Phase 5 Voting Concludes with 62.2% Turnout",
      "ECI Announces Schedule for Bypolls in 3 States",
      "VVPAT Verification Process Enhanced for 2024 Elections",
      "Record Number of Women Candidates in Current Elections",
      "New Mobile App Launched for Real-Time Election Updates"
    ],
    upcoming: [
      "Phase 6 Voting on May 25",
      "Phase 7 Voting on June 1",
      "Result Declaration on June 4",
      "Special Arrangements for Senior Citizens in Final Phase",
      "International Election Observers to Arrive Next Week"
    ],
    press: [
      "Press Release: ECI's Comprehensive Preparations for Phase 6",
      "Media Briefing: Voter Turnout Data Analysis",
      "Notice: Guidelines for Exit Polls",
      "Statement: Action Against Violation of Model Code of Conduct",
      "Press Conference: Security Measures for Counting Day"
    ],
    notifications: [
      "Important Notice for Overseas Voters",
      "Updated Guidelines for Polling Agents",
      "Rescheduling of Polls in Certain Constituencies",
      "Extension of Voting Hours in Selected Areas",
      "Special Instructions for Voters in Containment Zones"
    ],
    media: [
      "Photo Gallery: Voters Across India Exercise Their Franchise",
      "Video: ECI's Awareness Campaign on VVPAT",
      "Infographic: Phase-wise Voter Turnout Comparison",
      "Documentary: Journey of EVMs in Indian Elections",
      "Podcast: Interviews with First-time Voters"
    ]
  };
  
  const descriptions = {
    latest: [
      "The fifth phase of Lok Sabha elections 2024 concluded with a provisional voter turnout of 62.2%, covering 49 constituencies across 5 states.",
      "The Election Commission has announced the schedule for bypolls to 7 assembly constituencies across 3 states to be held alongside Phase 6 of Lok Sabha elections.",
      "ECI has introduced enhanced VVPAT verification measures for the ongoing general elections to strengthen transparency and voter confidence.",
      "The 2024 Lok Sabha elections have seen a 17% increase in women candidates compared to the 2019 elections, setting a new record.",
      "The Election Commission has launched a new mobile application providing real-time updates on the electoral process, voter turnout, and results."
    ],
    upcoming: [
      "The sixth phase of Lok Sabha polls will cover 58 constituencies across 7 states and union territories.",
      "The final phase of voting will take place in 57 constituencies across 8 states and union territories.",
      "Election results for all 543 Lok Sabha constituencies will be declared following the counting of votes.",
      "The Election Commission has made special arrangements for senior citizens and persons with disabilities for the final phase of voting.",
      "A delegation of international election observers will arrive next week to monitor the final phase of polling and the counting process."
    ],
    press: [
      "The Election Commission outlines the comprehensive preparations for the sixth phase of Lok Sabha elections.",
      "ECI shares detailed analysis of voter turnout patterns across different demographics in the completed phases.",
      "ECI issues guidelines regarding the conduct and broadcast of exit polls during the ongoing general elections.",
      "The Election Commission has taken strict action against 24 candidates for violating the Model Code of Conduct in various constituencies.",
      "The Chief Election Commissioner addresses media regarding the security arrangements for the counting of votes on June 4."
    ],
    notifications: [
      "Overseas voters can now register and vote through the newly implemented postal ballot system for the current general elections.",
      "The Election Commission has released updated guidelines for polling agents regarding their roles and responsibilities during the voting process.",
      "Due to unavoidable circumstances, polls in 3 constituencies have been rescheduled. Check the revised schedule here.",
      "Voting hours have been extended in selected constituencies to accommodate the high voter turnout and ensure all registered voters can exercise their franchise.",
      "Special instructions have been issued for voters residing in COVID-19 containment zones regarding voting procedures and safety protocols."
    ],
    media: [
      "View our photo gallery showcasing voters across different states participating in the democratic process during the first five phases of elections.",
      "Watch the ECI's awareness campaign video explaining the VVPAT system and its importance in ensuring transparent elections.",
      "An interactive infographic comparing the phase-wise voter turnout in the 2024 elections with previous general elections.",
      "A documentary on the evolution and journey of Electronic Voting Machines in Indian elections since their introduction.",
      "Listen to our podcast featuring interviews with first-time voters sharing their experiences and perspectives on participating in the electoral process."
    ]
  };
  
  for (let i = 0; i < count; i++) {
    const date = new Date(baseDate);
    date.setDate(date.getDate() - i * 2);
    
    updates.push({
      id: `${category}-${i}`,
      title: titles[category][i % titles[category].length],
      description: descriptions[category][i % descriptions[category].length],
      date: date.toISOString(),
      category: category.charAt(0).toUpperCase() + category.slice(1),
      image: `/images/updates/${category}-${(i % 5) + 1}.jpg`,
      link: `/updates/${category}/${i + 1}`
    });
  }
  
  return updates;
}
