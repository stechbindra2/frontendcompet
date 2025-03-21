import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ElectionUpdates() {
  const [activeTab, setActiveTab] = useState('latest');
  
  const updates = {
    latest: [
      {
        title: "Phase 5 Voting Concludes with 62.2% Turnout",
        date: "2024-05-20",
        description: "The fifth phase of Lok Sabha elections 2024 concluded with a provisional voter turnout of 62.2%, covering 49 constituencies across 5 states.",
        image: "/images/updates/phase5-voting.jpg",
        category: "Voting"
      },
      {
        title: "ECI Announces Schedule for Bypolls in 3 States",
        date: "2024-05-18",
        description: "The Election Commission has announced the schedule for bypolls to 7 assembly constituencies across 3 states to be held alongside Phase 6 of Lok Sabha elections.",
        image: "/images/updates/bypolls-schedule.jpg",
        category: "Announcement"
      },
      {
        title: "VVPAT Verification Process Enhanced for 2024 Elections",
        date: "2024-05-16",
        description: "ECI has introduced enhanced VVPAT verification measures for the ongoing general elections to strengthen transparency and voter confidence.",
        image: "/images/updates/vvpat-verification.jpg",
        category: "Technology"
      },
    ],
    upcoming: [
      {
        title: "Phase 6 Voting on May 25",
        date: "2024-05-25",
        description: "The sixth phase of Lok Sabha polls will cover 58 constituencies across 7 states and union territories.",
        image: "/images/updates/phase6-preview.jpg",
        category: "Voting"
      },
      {
        title: "Phase 7 Voting on June 1",
        date: "2024-06-01",
        description: "The final phase of voting will take place in 57 constituencies across 8 states and union territories.",
        image: "/images/updates/phase7-preview.jpg",
        category: "Voting"
      },
      {
        title: "Result Declaration on June 4",
        date: "2024-06-04",
        description: "Election results for all 543 Lok Sabha constituencies will be declared following the counting of votes.",
        image: "/images/updates/results-preview.jpg",
        category: "Results"
      },
    ],
    press: [
      {
        title: "Press Release: ECI's Comprehensive Preparations for Phase 6",
        date: "2024-05-22",
        description: "The Election Commission outlines the comprehensive preparations for the sixth phase of Lok Sabha elections.",
        image: "/images/updates/press-release.jpg",
        category: "Press Release"
      },
      {
        title: "Media Briefing: Voter Turnout Data Analysis",
        date: "2024-05-21",
        description: "ECI shares detailed analysis of voter turnout patterns across different demographics in the completed phases.",
        image: "/images/updates/media-briefing.jpg",
        category: "Media Briefing"
      },
      {
        title: "Notice: Guidelines for Exit Polls",
        date: "2024-05-19",
        description: "ECI issues guidelines regarding the conduct and broadcast of exit polls during the ongoing general elections.",
        image: "/images/updates/exit-poll-guidelines.jpg",
        category: "Notice"
      },
    ]
  };
  
  return (
    <section className="section bg-neutral-light">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Election Updates</h2>
          <p className="text-neutral-dark/80">
            Stay informed with the latest developments, schedules, and announcements related to the ongoing electoral process.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-neutral">
            <nav className="flex">
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'latest' 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-neutral-dark hover:text-primary'
                }`}
                onClick={() => setActiveTab('latest')}
              >
                Latest Updates
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'upcoming' 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-neutral-dark hover:text-primary'
                }`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Events
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === 'press' 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-neutral-dark hover:text-primary'
                }`}
                onClick={() => setActiveTab('press')}
              >
                Press Releases
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {updates[activeTab].map((update, index) => (
                <motion.div
                  key={update.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-neutral-light/50 rounded-lg overflow-hidden"
                >
                  <div className="relative h-40 w-full">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/30" />
                    <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">{update.category}</div>
                    <Image 
                      src={update.image}
                      alt={update.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-4">
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
                    
                    <Link href="#" className="text-primary hover:text-primary-dark text-sm font-medium inline-flex items-center">
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-6 text-center">
              <Link 
                href="/updates"
                className="btn-primary inline-flex items-center"
              >
                View All Updates
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
