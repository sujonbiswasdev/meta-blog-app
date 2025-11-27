import { Link } from 'react-router'

const BlogCard = ({blog}) => {
  
console.log(blog);
  return (
    <div className='border rounded-lg p-4 bg-white shadow-md'>
        <Link to={`/blogs/${blog?._id}`}>
        <img src={blog.image} alt="" className='w-full h-48 object-cover mb-4 hover:scale-105 transition-all duration-200 cursor-pointer rounded-md' />
        </Link>
        <div>
            <p className='bg-secoundary/5 inline-block text-sm text-secoundary'>Technology</p>
            <Link to={`/blogs/${blog?._id}`}>
            <h3 className='text-xl font-semibold text-gray-800 hover:text-purple-800 mb-2'>{blog?.title}</h3>
            </Link>
            <p>{`${blog.description.substring(0,150,)}....`}</p>
            <div className='mt-4 flex items-center'>
              <img src={blog.author.image} alt="" className='size-10 rounded-full mr-3' />
              <div>
                <p className='text-sm text-gray-600'>{blog.author.name}</p>
                  <p className='text-sm text-gray-600'>{blog.createdAt}</p>                 
              </div>
            </div>
        </div>
    </div>
  )
}
export default BlogCard