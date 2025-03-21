import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ElectionTimeline() {
  const [activeYear, setActiveYear] = useState('2024');
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const years = ['2024', '2023', '2022', '2021', '2019'];
  
  const elections = {
    upcoming: [
      {
        title: "Lok Sabha Elections 2024 - Phase 6",
        date: "May 25, 2024",
        states: "Bihar, Jharkhand, Odisha, Uttar Pradesh, West Bengal, Jammu & Kashmir, Delhi, Haryana",
        seats: "58",
        note: "Polling will be conducted from 7:00 AM to 6:00 PM"
      },
      {
        title: "Lok Sabha Elections 2024 - Phase 7",
        date: "June 1, 2024",
        states: "Bihar, Himachal Pradesh, Jharkhand, Odisha, Punjab, Uttar Pradesh, West Bengal, Chandigarh",
        seats: "57",
        note: "Polling will be conducted from 7:00 AM to 6:00 PM"
      },
      {
        title: "Result Declaration - Lok Sabha Elections 2024",
        date: "June 4, 2024",
        states: "All States and Union Territories",
        seats: "543",
        note: "Counting of votes will begin at 8:00 AM"
      },
      {
        title: "Assembly Elections in State X",
        date: "June 10-25, 2024",
        states: "State X",
        seats: "90",
        note: "Polling will be conducted in 3 phases"
      }
    ],
    completed: [
      {
        title: "Lok Sabha Elections 2024 - Phase 1",
        date: "April 19, 2024",
        states: "Assam, Bihar, Chhattisgarh, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Rajasthan, Sikkim, Tamil Nadu, Tripura, Uttar Pradesh, Uttarakhand, West Bengal, Arunachal Pradesh, Lakshadweep, Puducherry, Andaman & Nicobar Islands",
        seats: "102",
        note: "Voter turnout: 65.5%"
      },
      {
        title: "Lok Sabha Elections 2024 - Phase 2",
        date: "April 26, 2024",
        states: "Assam, Bihar, Chhattisgarh, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Rajasthan, Tripura, Uttar Pradesh, West Bengal, Jammu & Kashmir",
        seats: "89",
        note: "Voter turnout: 66.7%"
      },
      {
        title: "Lok Sabha Elections 2024 - Phase 3",
        date: "May 7, 2024",
        states: "Assam, Bihar, Chhattisgarh, Goa, Gujarat, Karnataka, Madhya Pradesh, Maharashtra, Uttar Pradesh, West Bengal, Dadra & Nagar Haveli and Daman & Diu",
        seats: "94",
        note: "Voter turnout: 64.2%"
      },
      {
        title: "Lok Sabha Elections 2024 - Phase 4",
        date: "May 13, 2024",
        states: "Andhra Pradesh, Bihar, Jharkhand, Madhya Pradesh, Maharashtra, Odisha, Telangana, Uttar Pradesh, West Bengal",
        seats: "96",
        note: "Voter turnout: 69.3%"
      },
      {
        title: "Lok Sabha Elections 2024 - Phase 5",
        date: "May 20, 2024",
        states: "Bihar, Jharkhand, Maharashtra, Odisha, Uttar Pradesh, West Bengal, Jammu & Kashmir, Ladakh",
        seats: "49",
        note: "Voter turnout: 62.2%"
      }
    ],
    pastYears: {
      '2023': [
        {
          title: "Assembly Elections in Tripura",
          date: "February 16, 2023",
          states: "Tripura",
          seats: "60",
          note: "Results declared on March 2, 2023"
        },
        {
          title: "Assembly Elections in Meghalaya & Nagaland",
          date: "February 27, 2023",
          states: "Meghalaya, Nagaland",
          seats: "60 in each state",
          note: "Results declared on March 2, 2023"
        },
        {
          title: "Assembly Elections in Karnataka",
          date: "May 10, 2023",
          states: "Karnataka",
          seats: "224",
          note: "Results declared on May 13, 2023"
        },
        {
          title: "Assembly Elections in Madhya Pradesh, Rajasthan, Chhattisgarh, Telangana, Mizoram",
          date: "November-December 2023",
          states: "Madhya Pradesh, Rajasthan, Chhattisgarh, Telangana, Mizoram",
          seats: "630 across all 5 states",
          note: "Results declared in December 2023"
        }
      ],
      '2022': [
        {
          title: "Assembly Elections in Goa, Manipur, Punjab, Uttarakhand, Uttar Pradesh",
          date: "February-March 2022",
          states: "Goa, Manipur, Punjab, Uttarakhand, Uttar Pradesh",
          seats: "690 across all 5 states",
          note: "Results declared on March 10, 2022"
        },
        {
          title: "Presidential Election",
          date: "July 18, 2022",
          states: "All States",
          seats: "1",
          note: "Droupadi Murmu elected as 15th President of India"
        },
        {
          title: "Vice-Presidential Election",
          date: "August 6, 2022",
          states: "All States",
          seats: "1",
          note: "Jagdeep Dhankhar elected as 14th Vice-President of India"
        },
        {
          title: "Assembly Elections in Gujarat & Himachal Pradesh",
          date: "November-December 2022",
          states: "Gujarat, Himachal Pradesh",
          seats: "182 in Gujarat, 68 in Himachal Pradesh",
          note: "Results declared in December 2022"
        }
      ],
      '2021': [
        {
          title: "Assembly Elections in Assam, Kerala, Puducherry, Tamil Nadu, West Bengal",
          date: "March-April 2021",
          states: "Assam, Kerala, Puducherry, Tamil Nadu, West Bengal",
          seats: "824 across all states and UT",
          note: "Results declared on May 2, 2021"
        }
      ],
      '2019': [
        {
          title: "Lok Sabha General Elections 2019",
          date: "April 11 - May 19, 2019",
          states: "All States and Union Territories",
          seats: "543",
          note: "Conducted in 7 phases with results declared on May 23, 2019"
        },
        {
          title: "Assembly Elections in Andhra Pradesh, Arunachal Pradesh, Odisha, Sikkim",
          date: "April-May 2019",
          states: "Andhra Pradesh, Arunachal Pradesh, Odisha, Sikkim",
          seats: "175, 60, 147, 32 respectively",
          note: "Conducted alongside Lok Sabha Elections"
        },
        {
          title: "Assembly Elections in Haryana & Maharashtra",
          date: "October 21, 2019",
          states: "Haryana, Maharashtra",
          seats: "90 in Haryana, 288 in Maharashtra",
          note: "Results declared on October 24, 2019"
        },
        {
          title: "Assembly Elections in Jharkhand",
          date: "November 30 - December 20, 2019",
          states: "Jharkhand",
          seats: "81",
          note: "Conducted in 5 phases with results declared on December 23, 2019"
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <title>Election Timeline | Election Commission of India</title>
        <meta name="description" content="View the schedule of upcoming and past elections conducted by the Election Commission of India." />
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
              Election Timeline
            </motion.h1>
            <motion.p 
              className="text-xl opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Schedule of upcoming and past elections across India
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-white">
        <div className="container">
          {/* Year Selection */}
          <div className="flex justify-center mb-8">
            <div className="bg-neutral-light inline-flex rounded-lg p-1">
              {years.map((year) => (
                <button
                  key={year}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeYear === year
                      ? 'bg-primary text-white'
                      : 'text-neutral-dark hover:bg-neutral/20'
                  }`}
                  onClick={() => {
                    setActiveYear(year);
                    if (year === '2024') {
                      setActiveTab('upcoming');
                    } else {
                      setActiveTab('pastYears');
                    }
                  }}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Current Year Tabs */}
          {activeYear === '2024' && (
            <div className="mb-8 border-b border-neutral">
              <nav className="flex">
                <button
                  className={`mr-2 inline-flex items-center py-4 px-4 border-b-2 font-medium text-sm ${
                    activeTab === 'upcoming'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-neutral-dark hover:text-primary hover:border-neutral'
                  }`}
                  onClick={() => setActiveTab('upcoming')}
                >
                  Upcoming Elections
                </button>
                <button
                  className={`mr-2 inline-flex items-center py-4 px-4 border-b-2 font-medium text-sm ${
                    activeTab === 'completed'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-neutral-dark hover:text-primary hover:border-neutral'
                  }`}
                  onClick={() => setActiveTab('completed')}
                >
                  Completed Elections
                </button>
              </nav>
            </div>
          )}

          {/* Election Tables */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
            <div className="px-6 py-4 bg-neutral-light border-b border-neutral">
              <h2 className="text-xl font-bold">
                {activeTab === 'upcoming' ? 'Upcoming Elections' : 
                 activeTab === 'completed' ? 'Completed Elections' : 
                 `Elections in ${activeYear}`}
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-neutral-light/50">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-dark">Election</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-dark">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-dark">States/UTs</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-dark">Seats</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-dark">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-light">
                  {activeTab === 'pastYears' ? (
                    elections.pastYears[activeYear]?.map((election, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-light/20'}>
                        <td className="px-6 py-4 text-sm font-medium">{election.title}</td>
                        <td className="px-6 py-4 text-sm">{election.date}</td>
                        <td className="px-6 py-4 text-sm">{election.states}</td>
                        <td className="px-6 py-4 text-sm">{election.seats}</td>
                        <td className="px-6 py-4 text-sm">{election.note}</td>
                      </tr>
                    ))
                  ) : (
                    elections[activeTab]?.map((election, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-light/20'}>
                        <td className="px-6 py-4 text-sm font-medium">{election.title}</td>
                        <td className="px-6 py-4 text-sm">{election.date}</td>
                        <td className="px-6 py-4 text-sm">{election.states}</td>
                        <td className="px-6 py-4 text-sm">{election.seats}</td>
                        <td className="px-6 py-4 text-sm">{election.note}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            
            {((activeTab === 'pastYears' && !elections.pastYears[activeYear]) || 
              (activeTab !== 'pastYears' && !elections[activeTab]?.length)) && (
              <div className="p-8 text-center">
                <svg className="w-16 h-16 mx-auto text-neutral-dark/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-bold mb-2">No elections found</h3>
                <p className="text-neutral-dark/70">There are no elections scheduled for this period.</p>
              </div>
            )}
          </div>

          {/* Election Process Section */}
          <div className="bg-neutral-light rounded-lg p-8 mb-12">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl font-bold mb-4">The Election Process</h2>
              <p className="text-neutral-dark/80">
                The Election Commission of India follows a systematic approach to conducting elections across the country
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Announcement & Preparation</h3>
                <ul className="space-y-2 text-neutral-dark/80 text-sm">
                  <li>• Election schedule announcement</li>
                  <li>• Model Code of Conduct implementation</li>
                  <li>• Revision of electoral rolls</li>
                  <li>• Training of election personnel</li>
                  <li>• Deployment of security forces</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Nomination & Campaigning</h3>
                <ul className="space-y-2 text-neutral-dark/80 text-sm">
                  <li>• Candidate nominations</li>
                  <li>• Scrutiny of nominations</li>
                  <li>• Election campaign period</li>
                  <li>• Monitoring of campaign expenditure</li>
                  <li>• Campaign silence period (48 hours before polling)</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Polling & Results</h3>
                <ul className="space-y-2 text-neutral-dark/80 text-sm">
                  <li>• Setup of polling stations</li>
                  <li>• Polling day procedures</li>
                  <li>• Counting of votes</li>
                  <li>• Declaration of results</li>
                  <li>• Constitution of new government</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Voter Awareness Section */}
          <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Make Your Vote Count</h2>
                <p className="mb-6">
                  Being aware of the election schedule is the first step towards exercising your right to vote. Mark the important dates and ensure you participate in the democratic process.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Check your name on the voter list before election day</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Carry valid photo ID proof when going to vote</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Plan your visit to the polling booth in advance</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-lg p-6 inline-block">
                  <h3 className="text-primary font-bold mb-4">Check Your Voter Registration</h3>
                  <Link href="/voter-services/registration" className="btn-primary">
                    Voter Services
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
