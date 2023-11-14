"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const Login = () => {
  

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    

   
    const result = await signIn('credentials', {
      redirect: false,
      username: email,
      password,
    });

    if (!result.error) {
      
      console.log('Successfully logged in:', result);
    } else {
      
      console.error('Login error:', result.error);
    }
  };

  return (
    <section className="bg-main bg-cover">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:pt-16">
       
        <div className="w-full backdrop-blur-xl rounded-lg shadow dark:border md:mt-7 sm:max-w-custom h-custom xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight pb-9 pt-4 text-white md:text-2xl dark:text-white">
              Sign In
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin} action="#">
              <div className='w-full'>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="example@xyz.com"
                  required
                />
              </div>
            
            
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="flex items-center justify-center">
                
                <div className="ml-3 text-sm ">
                  <label htmlFor="terms" className="font-light text-white dark:text-gray-300">
                    <a className="font-medium text-slate-300 hover:underline dark:text-primary-500" href="#">
                      Forgot Password?
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Log In
              </button>
              <p className="text-center text-sm font-light text-white dark:text-gray-400">
                Don't have an account? <Link href="/signup" className="font-medium text-teal-500 hover:underline dark:text-primary-500">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
