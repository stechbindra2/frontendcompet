import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

export default function AuthForm({ mode }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  
  const onSubmit = async (data) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log(data);
    setIsLoading(false);
    
    // In a real app, you would handle authentication here
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {mode === 'signup' && (
        <div>
          <label 
            htmlFor="fullName" 
            className="block text-sm font-medium text-neutral-dark mb-1"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            className="input-field"
            placeholder="Enter your full name"
            {...register('fullName', { required: 'Full name is required' })}
            aria-invalid={errors.fullName ? 'true' : 'false'}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>
      )}
      
      <div>
        <label 
          htmlFor="email" 
          className="block text-sm font-medium text-neutral-dark mb-1"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="input-field"
          placeholder="Enter your email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <label 
          htmlFor="password" 
          className="block text-sm font-medium text-neutral-dark mb-1"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          className="input-field"
          placeholder="Enter your password"
          {...register('password', { 
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters'
            }
          })}
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>
      
      {mode === 'login' && (
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary border-neutral rounded"
              {...register('remember')}
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-neutral-dark">
              Remember me
            </label>
          </div>
          
          <div className="text-sm">
            <a href="#" className="text-primary hover:text-primary-dark">
              Forgot password?
            </a>
          </div>
        </div>
      )}
      
      <div className="pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="btn-primary w-full flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            mode === 'login' ? 'Sign In' : 'Create Account'
          )}
        </button>
      </div>
      
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-neutral"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-neutral-dark">Or continue with</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          className="btn border border-neutral bg-white hover:bg-neutral-light text-neutral-dark"
        >
          <span className="sr-only">Sign in with Google</span>
          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" fill="currentColor"/>
          </svg>
          Google
        </button>
        
        <button
          type="button"
          className="btn border border-neutral bg-white hover:bg-neutral-light text-neutral-dark"
        >
          <span className="sr-only">Sign in with OTP</span>
          <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12H16M8 16H13M12 4H7C5.89543 4 5 4.89543 5 6V18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V8M12 4L19 11M12 4V11H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          OTP
        </button>
      </div>
    </form>
  );
}
