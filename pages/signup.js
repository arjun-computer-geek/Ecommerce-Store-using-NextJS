import React, { useState } from 'react'
import Link from 'next/link'

const Signup = () => {
  const [form, setForm] = useState({})

  const handleFormFields = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = e => {
    // todo: need to update to API endpoint to handle POST request
    fetch('/api/***API TO HANDLE*** login', {
      method: POST,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }

  console.log(form)

  return (
    <>
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <img className='mx-auto h-12 w-auto' src='/logo.png' alt='Workflow' />
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Sign up for your account</h2>
            <p className='mt-2 text-center text-sm text-gray-600'>
              Or&nbsp;
              <span className='font-medium text-blue-600 hover:text-blue-500'>
                <Link href={'/login'}>log in to your account</Link>
              </span>
            </p>
          </div>
          <form className='mt-8 space-y-6' action='submit' onSubmit={handleFormSubmit} method='POST'>
            <input type='hidden' name='remember' value='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label htmlFor='full-name' className='sr-only'>
                  Full Name
                </label>
                <input
                  id='full-name'
                  name='fullName'
                  type='text'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                  placeholder='Full Name'
                  onChange={handleFormFields}
                />
              </div>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Email address
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                  placeholder='Email address'
                  onChange={handleFormFields}
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                  placeholder='Password'
                  onChange={handleFormFields}
                />
              </div>

              <div>
                <label htmlFor='password' className='sr-only'>
                  ConfirmPassword
                </label>
                <input
                  id='password'
                  name='Cpassword'
                  type='password'
                  required
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                  placeholder='Confirm password'
                  onChange={handleFormFields}
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                {/* <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span> */}
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signup
