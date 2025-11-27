import React from 'react'

const NewsLetter = () => {
  return (
    <div className='my-16 bg-no-repeat bg-center bg-cover rounded-md ' style={{backgroundImage:`url(${'/news.png'})`}}>

        <div className='py-12 bg-black/40 rounded-md h-full flex items-center justify-center text-center'>
        <div>
            <h2 className='text-2xl font-bold text-white'>Sign up for new latter</h2>
            <p className='text-lg text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, inventore?</p>
            <button className='bg-white hover:bg-blue-800 rounded-lg hover:text-white px-4 py-2 transition-all duration-300  cursor-pointer mt-2.5'>sign up</button>
        </div>
        </div>
        
    </div>
  )
}

export default NewsLetter