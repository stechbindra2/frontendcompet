import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import ResultsSummary from '../components/results/ResultsSummary';
import ResultsFilters from '../components/results/ResultsFilters';
import DetailPanel from '../components/results/DetailPanel';
import { electionData } from '../data/mockElectionData';

// Dynamically import the map component to prevent SSR issues with Leaflet
const ElectionMap = dynamic(
  () => import('../components/results/ElectionMap'),
  { ssr: false, loading: () => <div className="w-full h-[500px] loading-skeleton" /> }
);

// Dynamically import chart components
const ResultsCharts = dynamic(
  () => import('../components/results/ResultsCharts'),
  { loading: () => <div className="w-full h-[400px] loading-skeleton" /> }
);

export default function Results() {
  const [selectedState, setSelectedState] = useState(null);
  const [electionYear, setElectionYear] = useState('2024');
  const [liveUpdates, setLiveUpdates] = useState(true);
  
  // Simulated live update effect
  useEffect(() => {
    if (!liveUpdates) return;
    
    const interval = setInterval(() => {
      // In a real app, this would fetch fresh data
      console.log('Fetching updated election data...');
    }, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, [liveUpdates]);
  
  return (
    <>
      <Head>
        <title>Election Results | Election Commission of India</title>
      </Head>
      
      <div className="container py-8">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Election Results</h1>
          <div className="flex items-center">
            <nav className="text-sm breadcrumbs">
              <ul className="flex space-x-2">
                <li><Link href="/">Home</Link> /</li>
                <li className="text-primary font-medium">Results</li>
              </ul>
            </nav>
            
            {liveUpdates && (
              <motion.div 
                className="ml-auto flex items-center bg-accent/20 text-accent-dark px-3 py-1 rounded-full text-sm font-medium"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <span className="h-2 w-2 rounded-full bg-accent-dark mr-2"></span>
                Live Updates
              </motion.div>
            )}
          </div>
        </div>
        
        <ResultsFilters 
          electionYear={electionYear} 
          setElectionYear={setElectionYear}
          liveUpdates={liveUpdates}
          setLiveUpdates={setLiveUpdates}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 space-y-6">
            <ResultsSummary data={electionData} year={electionYear} />
            
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-bold mb-4">Electoral Map</h2>
              <div className="h-[500px]">
                <ElectionMap 
                  data={electionData} 
                  onStateSelect={setSelectedState}
                  selectedState={selectedState}
                />
              </div>
            </div>
            
            <ResultsCharts data={electionData} year={electionYear} />
          </div>
          
          <div className="lg:col-span-1">
            <DetailPanel 
              selectedState={selectedState} 
              data={electionData}
              year={electionYear}
            />
          </div>
        </div>
      </div>
    </>
  );
}
