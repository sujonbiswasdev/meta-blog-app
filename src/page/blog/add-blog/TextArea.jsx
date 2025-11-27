import React from 'react'

const TextArea = ({label,type,id,placeholder,register}) => {
  return (
    <div>
         <label htmlFor="message" className='block text-gray-700 text-sm font-bold mb-2'>{label}</label>
                       <textarea
                       rows="4"
                       {...register}
                        className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        placeholder={placeholder} id={id}
                       ></textarea>
    </div>
  )
}

export default TextArea