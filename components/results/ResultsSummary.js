import { motion } from 'framer-motion';

export default function ResultsSummary({ data, year }) {
  // Return early with a loading state if data or summary is not available
  if (!data || !data.summary) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Election Results Summary</h2>
        <div className="flex justify-center items-center py-12">
          <div className="text-center">
            <svg className="animate-spin h-8 w-8 text-primary mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-neutral-dark/70">Loading election data...</p>
          </div>
        </div>
      </div>
    );
  }

  const { summary } = data;
  
  // Calculate seats data
  const totalSeats = 543;
  const declaredSeats = summary.totalDeclared || 0;
  const remainingSeats = totalSeats - declaredSeats;
  const majorityMark = Math.floor(totalSeats / 2) + 1;

  // Ensure parties array exists with a fallback
  const parties = summary.parties || [];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center justify-between">
        <span>Election Results Summary</span>
        <span className="text-sm bg-neutral-light px-2 py-1 rounded">{year}</span>
      </h2>
      
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-1">
          <span>Results Declared</span>
          <span className="font-medium">{declaredSeats} of {totalSeats} seats</span>
        </div>
        <div className="w-full bg-neutral-light rounded-full h-2.5">
          <div 
            className="bg-primary h-2.5 rounded-full"
            style={{ width: `${(declaredSeats / totalSeats) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-neutral-dark/70 mt-1">
          <span>Last updated: {new Date().toLocaleTimeString()}</span>
          <span>{Math.round((declaredSeats / totalSeats) * 100)}% complete</span>
        </div>
      </div>
      
      {/* Party Results */}
      <div className="space-y-4">
        {parties.map((party, index) => (
          <motion.div 
            key={party.name}
            className="flex items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <div className="w-24 text-sm font-medium">{party.name}</div>
            <div className="flex-grow mx-3">
              <div className="relative w-full bg-neutral-light rounded-full h-7">
                <div 
                  className={`absolute top-0 left-0 h-7 rounded-full ${getPartyColor(party.name)}`}
                  style={{ width: `${(party.seats / totalSeats) * 100}%` }}
                ></div>
                
                {/* Majority line */}
                {index === 0 && (
                  <div 
                    className="absolute top-0 h-7 border-l-2 border-dashed border-neutral-dark/30"
                    style={{ left: `${(majorityMark / totalSeats) * 100}%` }}
                  >
                    <div className="absolute top-full left-0 transform -translate-x-1/2 text-xs text-neutral-dark/50 mt-1">
                      Majority: {majorityMark}
                    </div>
                  </div>
                )}
                
                <div className="absolute inset-0 flex items-center justify-between px-3">
                  <span className="text-xs font-medium text-white truncate">
                    {party.seats > 10 ? party.name : ''}
                  </span>
                  <span className="text-xs font-medium text-white">
                    {party.seats}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-16 text-center">
              {party.change > 0 ? (
                <span className="text-xs text-green-600">+{party.change} ↑</span>
              ) : party.change < 0 ? (
                <span className="text-xs text-red-600">{party.change} ↓</span>
              ) : (
                <span className="text-xs text-neutral-dark">No change</span>
              )}
            </div>
          </motion.div>
        ))}
        
        {/* Others and Remaining */}
        {summary.othersSeats !== undefined && (
          <div className="flex items-center">
            <div className="w-24 text-sm font-medium">Others</div>
            <div className="flex-grow mx-3">
              <div className="relative w-full bg-neutral-light rounded-full h-7">
                <div 
                  className="absolute top-0 left-0 h-7 rounded-full bg-neutral-dark/60"
                  style={{ width: `${(summary.othersSeats / totalSeats) * 100}%` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-between px-3">
                  <span className="text-xs font-medium text-white truncate">
                    {summary.othersSeats > 10 ? 'Others' : ''}
                  </span>
                  <span className="text-xs font-medium text-white">
                    {summary.othersSeats}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-16 text-center">
              {summary.othersChange > 0 ? (
                <span className="text-xs text-green-600">+{summary.othersChange} ↑</span>
              ) : summary.othersChange < 0 ? (
                <span className="text-xs text-red-600">{summary.othersChange} ↓</span>
              ) : (
                <span className="text-xs text-neutral-dark">No change</span>
              )}
            </div>
          </div>
        )}
        
        {remainingSeats > 0 && (
          <div className="flex items-center text-neutral-dark/80">
            <div className="w-24 text-sm font-medium">Awaited</div>
            <div className="flex-grow mx-3">
              <div className="relative w-full bg-neutral-light/50 rounded-full h-7">
                <div className="absolute inset-0 flex items-center px-3">
                  <span className="text-xs font-medium">
                    Results awaited for {remainingSeats} seats
                  </span>
                </div>
              </div>
            </div>
            <div className="w-16"></div>
          </div>
        )}
      </div>
      
      {/* Vote Share */}
      {parties.length > 0 && (
        <div className="mt-8">
          <h3 className="text-sm font-medium mb-3">Vote Share (%)</h3>
          <div className="grid grid-cols-2 gap-4">
            {parties.slice(0, 4).map((party) => (
              <div key={party.name} className="bg-neutral-light/50 rounded p-3">
                <div className="flex justify-between mb-1">
                  <span className="text-sm">{party.name}</span>
                  <span className="text-sm font-medium">{party.voteShare}%</span>
                </div>
                <div className="w-full bg-neutral-light rounded-full h-1.5">
                  <div 
                    className={`h-1.5 rounded-full ${getPartyColor(party.name)}`}
                    style={{ width: `${party.voteShare}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
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
      return 'bg-green-500';
    case 'TMC':
      return 'bg-emerald-600';
    case 'SP':
      return 'bg-red-500';
    default:
      return 'bg-gray-600';
  }
}
