import '../styles/globals.css';
import { motion } from 'framer-motion';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Election Commission of India - Redesigned</title>
        <meta name="description" content="Redesigned website for the Election Commission of India" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div className="flex flex-col min-h-screen bg-neutral-light">
        <NavBar />
        <motion.main 
          className="flex-grow"
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Component {...pageProps} />
        </motion.main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
