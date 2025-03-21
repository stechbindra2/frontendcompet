import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DetailPanel({ selectedState, data, year }) {
  const [activeTab, setActiveTab] = useState('results');
  
  // Find state data if a state is selected
  const stateData = selectedState ? 
    data.states.find(state => state.name === selectedState) : null;
  
  return (
    <div className="bg-white rounded-lg shadow h-full">
      <div className="px-4 py-3 border-b border-neutral">
        <h2 className="text-xl font-bold">
          {selectedState ? selectedState : 'National Overview'}
        </h2>
      </div>
      
      <div className="border-b border-neutral">
        <nav className="flex">
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'results' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-neutral-dark hover:text-primary'
            }`}
            onClick={() => setActiveTab('results')}
          >
            Results
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'demographics' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-neutral-dark hover:text-primary'
            }`}
            onClick={() => setActiveTab('demographics')}
          >
            Demographics
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === 'turnout' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-neutral-dark hover:text-primary'
            }`}
            onClick={() => setActiveTab('turnout')}
          >
            Turnout
          </button>
        </nav>
      </div>
      
      <div className="p-4">
        {!selectedState && (
          <div className="text-center py-8">
            <svg className="w-16 h-16 mx-auto text-neutral-dark/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <p className="text-neutral-dark/70">Select a state on the map to view detailed information</p>
          </div>
        )}
        
        {selectedState && stateData && activeTab === 'results' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm text-neutral-dark/70">
                Counting complete: <span className="font-medium">{stateData.completed}%</span>
              </div>
              <div className="bg-neutral-light px-2 py-0.5 rounded text-xs font-medium">
                {year}
              </div>
            </div>
            
            <div className="space-y-4">
              {stateData.results.map((result, index) => (
                <div key={result.party} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full mr-2 ${getPartyColor(result.party)}`}></div>
                    <div>
                      <div className="font-medium">{result.party}</div>
                      <div className="text-xs text-neutral-dark/70">
                        {formatNumber(result.votes)} votes
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">{result.seats}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-neutral">
              <h3 className="text-sm font-medium mb-2">Key Candidates</h3>
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-neutral-light/50">
                    <th className="px-2 py-1 text-left">Candidate</th>
                    <th className="px-2 py-1 text-left">Party</th>
                    <th className="px-2 py-1 text-left">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-light">
                  {getCandidates(selectedState).map((candidate, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-light/20'}>
                      <td className="px-2 py-1.5">{candidate.name}</td>
                      <td className="px-2 py-1.5">
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-1 ${getPartyColor(candidate.party)}`}></div>
                          {candidate.party}
                        </div>
                      </td>
                      <td className={`px-2 py-1.5 ${candidate.status === 'Leading' ? 'text-green-600' : candidate.status === 'Trailing' ? 'text-red-600' : ''}`}>
                        {candidate.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
        
        {selectedState && activeTab === 'demographics' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="py-4"
          >
            <p className="text-center text-neutral-dark/70 italic">
              Demographic data visualization will be available soon.
            </p>
          </motion.div>
        )}
        
        {selectedState && activeTab === 'turnout' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="py-4"
          >
            <p className="text-center text-neutral-dark/70 italic">
              Turnout analysis will be available soon.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function getPartyColor(party) {
  switch(party) {
    case 'BJP':
      return 'bg-orange-500';
    case 'INC':
      return 'bg-blue-500';
    case 'AAP':
      return 'bg-teal-500';
    case 'TMC':
      return 'bg-green-600';
    case 'SP':
      return 'bg-red-500';
    case 'DMK':
      return 'bg-purple-500';
    case 'AIADMK':
      return 'bg-yellow-500';
    case 'NCP':
      return 'bg-indigo-500';
    case 'SS':
      return 'bg-amber-500';
    case 'BSP':
      return 'bg-blue-700';
    case 'CPI(M)':
      return 'bg-red-700';
    case 'IUML':
      return 'bg-green-800';
    default:
      return 'bg-gray-500';
  }
}

function formatNumber(number) {
  if (number >= 10000000) {
    return (number / 10000000).toFixed(1) + ' Cr';
  } else if (number >= 100000) {
    return (number / 100000).toFixed(1) + ' L';
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + ' K';
  }
  return number;
}

function getCandidates(stateName) {
  // Mock candidate data - in a real app this would come from an API
  const candidatesByState = {
    'Uttar Pradesh': [
      { name: 'Narendra Modi', party: 'BJP', status: 'Leading' },
      { name: 'Rahul Gandhi', party: 'INC', status: 'Leading' },
      { name: 'Akhilesh Yadav', party: 'SP', status: 'Leading' },
      { name: 'Mayawati', party: 'BSP', status: 'Trailing' }
    ],
    'Maharashtra': [
      { name: 'Nitin Gadkari', party: 'BJP', status: 'Won' },
      { name: 'Supriya Sule', party: 'NCP', status: 'Leading' },
      { name: 'Uddhav Thackeray', party: 'SS', status: 'Trailing' }
    ],
    'West Bengal': [
      { name: 'Mamata Banerjee', party: 'TMC', status: 'Leading' },
      { name: 'Suvendu Adhikari', party: 'BJP', status: 'Trailing' },
      { name: 'Adhir Ranjan Chowdhury', party: 'INC', status: 'Leading' }
    ],
    'Tamil Nadu': [
      { name: 'MK Stalin', party: 'DMK', status: 'Leading' },
      { name: 'Edappadi K. Palaniswami', party: 'AIADMK', status: 'Leading' },
      { name: 'P. Chidambaram', party: 'INC', status: 'Won' }
    ],
    'Kerala': [
      { name: 'Shashi Tharoor', party: 'INC', status: 'Leading' },
      { name: 'Pinarayi Vijayan', party: 'CPI(M)', status: 'Trailing' },
      { name: 'E. T. Mohammed Basheer', party: 'IUML', status: 'Leading' }
    ],
    'Delhi': [
      { name: 'Arvind Kejriwal', party: 'AAP', status: 'Leading' },
      { name: 'Manoj Tiwari', party: 'BJP', status: 'Leading' },
      { name: 'Sheila Dikshit', party: 'INC', status: 'Trailing' }
    ]
  };
  
  return candidatesByState[stateName] || [];
}
