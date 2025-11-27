import React from 'react'
import { Link } from 'react-router'

const Banner = () => {
  return (
    <div className='my-16'>
        <div className='text-center mb-8'>

            <h1 className=' text-4xl font-semibold mb-4 '>Meta Blog</h1>
            <ul className='flex flex-wrap items-center justify-center gap-4'>
                <li>
                    <Link to={'/'} className='bg-secoundary/10 px-2.5 py-1 rounded-full hover:text-secoundary'>Home</Link>
                </li>

                <li>
                    <Link to={'/add-blog'} className='bg-secoundary/10 px-2.5 py-1 rounded-full hover:text-secoundary'>Add New Blog</Link>
                </li>
                 <li>
                    <Link to={'/manage-blog'} className='bg-secoundary/10 px-2.5 py-1 rounded-full hover:text-secoundary'>Manage Blog</Link>
                </li>
            </ul>
        </div>
        {/* Banner image */}
        <div className=''>
            <div style={{backgroundImage:`url(banner.jpg)`}} className='md:min-h-[450px] h-80 w-full bg-cover bg-no-repeat rounded-md'>
                <div className='flex flex-col h-full justify-end px-4 font-bold'>
                    <span className='bg-purple-700 text-white text-center max-w-36 px-4 py-1 rounded-md mb-3'>Technology</span>
                    <h2 className='sm:text-3xl text-2xl font-semibold md:w-1/2 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
                    <div className='flex items-center text-[#000000] md:-ml-8 lg:-ml-10'>
                        <img src="/mostofa.png" className='h-14 w-auto rounded-full' alt="" />
                        <div className='flex flex-wrap items-center space-x-2 -mt-3 -ml-4'>
                            <span className='  text-base cursor-pointer hover:underline underline-offset-2'>mostofa ahmed</span>
                            <span className='  '>20-November-2025</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner