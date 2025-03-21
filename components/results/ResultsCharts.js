import { useState } from 'react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function ResultsCharts({ data, year }) {
  const [chartView, setChartView] = useState('timeline');
  
  // Handle cases where data is undefined or incomplete
  if (!data || !data.trends) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-bold mb-4">Election Trends & Analysis</h2>
        <div className="flex justify-center items-center py-12 h-60">
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
  
  // Set default objects to prevent errors when properties are missing
  const voteShare = data.trends.voteShare || {};
  const historical = data.trends.historical || {};
  const regional = data.trends.regional || {};
  
  // Prepare vote share data for pie chart
  const voteShareData = Object.entries(voteShare).map(([party, share]) => ({
    name: party,
    value: share
  }));
  
  const PARTY_COLORS = {
    BJP: '#FF9933',
    INC: '#00BFFF',
    AAP: '#2AAA8A',
    TMC: '#2E8B57',
    SP: '#FF0000',
    Others: '#A0A0A0'
  };
  
  // Timeline data with safety checks
  const timelineData = Object.entries(historical).map(([year, parties]) => {
    return {
      year,
      ...Object.fromEntries(Object.entries(parties || {}).map(([party, seats]) => [party, seats]))
    };
  });
  
  // Regional distribution data with safety checks
  const regionalData = Object.entries(regional).map(([region, parties]) => {
    return {
      region,
      ...Object.fromEntries(Object.entries(parties || {}).map(([party, seats]) => [party, seats]))
    };
  });

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="flex items-center justify-between p-4 border-b border-neutral">
        <h2 className="text-lg font-bold">Election Trends & Analysis</h2>
        
        <div className="flex space-x-1">
          <button
            onClick={() => setChartView('timeline')}
            className={`px-3 py-1 rounded-md text-xs font-medium ${
              chartView === 'timeline' 
                ? 'bg-primary text-white' 
                : 'bg-neutral-light text-neutral-dark hover:bg-neutral'
            }`}
          >
            Historical Trends
          </button>
          <button
            onClick={() => setChartView('voteshare')}
            className={`px-3 py-1 rounded-md text-xs font-medium ${
              chartView === 'voteshare' 
                ? 'bg-primary text-white' 
                : 'bg-neutral-light text-neutral-dark hover:bg-neutral'
            }`}
          >
            Vote Share
          </button>
          <button
            onClick={() => setChartView('regional')}
            className={`px-3 py-1 rounded-md text-xs font-medium ${
              chartView === 'regional' 
                ? 'bg-primary text-white' 
                : 'bg-neutral-light text-neutral-dark hover:bg-neutral'
            }`}
          >
            Regional
          </button>
        </div>
      </div>
      
      <div className="p-4 h-80">
        {timelineData.length === 0 && voteShareData.length === 0 && regionalData.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <p className="text-neutral-dark/70">No data available for selected view</p>
            </div>
          </div>
        ) : chartView === 'timeline' && timelineData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={timelineData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              {Object.keys(PARTY_COLORS).map((party) => (
                <Line 
                  key={party}
                  type="monotone"
                  dataKey={party}
                  stroke={PARTY_COLORS[party]}
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        ) : chartView === 'voteshare' && voteShareData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={voteShareData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {voteShareData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PARTY_COLORS[entry.name] || '#A0A0A0'} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : chartView === 'regional' && regionalData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={regionalData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Legend />
              {Object.keys(PARTY_COLORS).map((party) => (
                <Bar key={party} dataKey={party} stackId="a" fill={PARTY_COLORS[party]} />
              ))}
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex justify-center items-center h-full">
            <div className="text-center">
              <p className="text-neutral-dark/70">No data available for selected view</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
