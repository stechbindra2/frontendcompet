import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import StatsGrid from '../components/home/StatsGrid';
import ElectionUpdates from '../components/home/ElectionUpdates';
import FeaturedLinks from '../components/home/FeaturedLinks';

export default function Home() {
  return (
    <>
      <Head>
        <title>Election Commission of India - India's Democratic Pulse</title>
        <meta name="description" content="Official portal of the Election Commission of India. View live election results, voter information, and electoral data." />
      </Head>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/india-map-bg.svg"
            alt="India Map Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        
        <div className="container relative py-16 md:py-24">
          <div className="max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              India's Democratic Pulse
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Empowering citizens with transparent electoral data and accessible voting information
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/results" legacyBehavior>
                <a className="btn-accent">View Live Results</a>
              </Link>
              <Link href="/voter-services" legacyBehavior>
                <a className="btn border-2 border-white bg-transparent hover:bg-white hover:text-primary text-white">
                  Voter Services
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsGrid />

      {/* Election Updates */}
      <ElectionUpdates />

      {/* Featured Links */}
      <FeaturedLinks />
    </>
  );
}
