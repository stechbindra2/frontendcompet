import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import AuthForm from '../components/auth/AuthForm';

export default function Login() {
  const [authMode, setAuthMode] = useState('login');
  
  const toggleAuthMode = () => {
    setAuthMode(authMode === 'login' ? 'signup' : 'login');
  };
  
  return (
    <>
      <Head>
        <title>{authMode === 'login' ? 'Login' : 'Sign Up'} | Election Commission of India</title>
      </Head>
      
      <div className="container py-12 md:py-20">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary px-6 py-4">
            <h1 className="text-2xl font-bold text-white text-center">
              {authMode === 'login' ? 'Login to Your Account' : 'Create an Account'}
            </h1>
          </div>
          
          <motion.div 
            key={authMode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6"
          >
            <AuthForm mode={authMode} />
            
            <div className="mt-6 text-center">
              <button 
                onClick={toggleAuthMode}
                className="text-primary hover:text-primary-dark transition-colors"
              >
                {authMode === 'login' 
                  ? "Don't have an account? Sign up" 
                  : "Already have an account? Login"}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
