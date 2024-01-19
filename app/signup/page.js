"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation'


const Signup = ({username}) => {
  
  const router = useRouter()
  const { msg } = router.query ?? { msg: null };
  const [error, setError] = useState(null);

  return (
    <section className="bg-main bg-cover">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:pt-16">
       
        <div className="w-full backdrop-blur-xl rounded-lg shadow dark:border md:mt-7 sm:max-w-custom xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
              Create an Account
            </h1>
            {msg ?
                <h3 >{msg}</h3>
            :
                <></>
            }
            <form className="space-y-4 md:space-y-6"  action='/api/signup' method='POST'>
            <div className='flex w-full gap-5'>
              <div className='w-full'>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-white">
                  Username
                </label>
                <input
                
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Type your name"
                  required
                />
              </div>
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
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm ">
                  <label htmlFor="terms" className="font-light text-white dark:text-gray-300">
                    I accept the <a className="font-medium text-teal-500 hover:underline dark:text-primary-500" href="#">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit" value="Signup"
                className="w-full text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
              <p className="text-center text-sm font-light text-white dark:text-gray-400">
                Already have an account? <Link href="/login" className="font-medium text-teal-500 hover:underline dark:text-primary-500">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  const req = context.req
  const res = context.res
  var username = getCookie('username', { req, res });
  if (username != undefined){
      return {
          redirect: {
              permanent: false,
              destination: "/"
          }
      }
  }
  return { props: {username:false} };
};

export default Signup;
