import { useState } from 'react';

export default function ResultsFilters({ electionYear, setElectionYear, liveUpdates, setLiveUpdates }) {
  const [showFilters, setShowFilters] = useState(false);
  
  const years = ['2024', '2019', '2014', '2009', '2004'];

  return (
    <div className="bg-white rounded-lg shadow mb-6">
      <div className="flex items-center justify-between p-4 border-b border-neutral">
        <h2 className="text-lg font-bold">Election Results</h2>
        
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <span className="mr-2 text-sm">Year:</span>
            <select 
              className="bg-neutral-light border-0 rounded py-1 px-2 text-sm focus:ring-primary"
              value={electionYear}
              onChange={(e) => setElectionYear(e.target.value)}
            >
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          
          <button
            className="inline-flex items-center px-3 py-1 bg-neutral-light hover:bg-neutral text-neutral-dark text-sm rounded-md"
            onClick={() => setShowFilters(!showFilters)}
          >
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
            {showFilters ? (
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {showFilters && (
        <div className="p-4 border-b border-neutral bg-neutral-light/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-dark mb-1">
                Election Type
              </label>
              <select className="input-field text-sm py-2">
                <option>Lok Sabha (Parliamentary)</option>
                <option>State Assembly</option>
                <option>By-elections</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-dark mb-1">
                State/UT
              </label>
              <select className="input-field text-sm py-2">
                <option>All States</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                {/* More states would be listed here */}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-neutral-dark mb-1">
                View
              </label>
              <select className="input-field text-sm py-2">
                <option>All Constituencies</option>
                <option>Reserved Constituencies</option>
                <option>General Constituencies</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-between mt-4">
            <div className="flex items-center">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-primary border-neutral rounded focus:ring-primary"
                  checked={liveUpdates}
                  onChange={() => setLiveUpdates(!liveUpdates)}
                />
                <span className="ml-2 text-sm">
                  Live updates
                  {liveUpdates && (
                    <span className="ml-2 relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                  )}
                </span>
              </label>
            </div>
            
            <div>
              <button className="text-sm text-primary hover:text-primary-dark">
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
