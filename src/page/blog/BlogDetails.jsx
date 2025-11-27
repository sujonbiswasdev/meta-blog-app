import React, { useEffect, useState } from 'react'
import authorImag from '../../assets/authors/author-1.png'
import BlogImg from '../../assets/blogs/blog-1.png'
import { useParams } from 'react-router'
import axios from 'axios';
const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setblog] = useState(null);
  const [loading,setloading]=useState(true)
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response=await axios.get(`https://meta-blog-backend-1mqx.vercel.app/blogs/${id}`)
        setblog(response.data.blog)
        setloading(false)
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchBlog()
  }, [])
  console.log(blog);

  if(loading){
    return <div class="flex min-h-screen items-center justify-center">
    <div class="w-1/3">
        <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
        <div class="h-48 bg-gray-300"></div>
        <div class="px-6 py-4">
            <div class="h-6 bg-gray-300 mb-2"></div>
            <div class="h-4 bg-gray-300 w-2/3"></div>
        </div>
        <div class="px-6 pt-4 pb-2">
            <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
            <div class="h-4 bg-gray-300 w-1/2"></div>
        </div>
        </div>
    </div>
</div>
  }
  return (
    <div className='container max-w-7xl mx-auto px-4 py-8'>
      <div>
        <h2 className='text-3xl font-bold mb-4'>{blog.title}</h2>
        <div className='flex items-center mb-4 space-x-2'>
          <img src={blog.author.image} className='rounded-full w-14 h-14' alt="" />
          <div>
            <p className='text-lg font-medium'>{blog.author.name}</p>
            <p className='text-lg font-medium'>9/1/2025</p>
          </div>

        </div>
        <img src={blog.image} className='w-full md:h-[500px] rounded-md object-cover mb-4' alt="" />
        <p>{blog.description}</p>
      </div>
    </div>
  )
}

export default BlogDetails