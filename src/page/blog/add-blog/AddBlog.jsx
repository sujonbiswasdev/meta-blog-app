import React from 'react'
import InputField from './InputField'
import TextArea from './TextArea'
import { useForm } from "react-hook-form"
import axios from 'axios'

const AddBlog = () => {
      const {
    register,
    handleSubmit,
    watch,
    formState: { errors },reset
  } = useForm()

    const onSubmit = async(data) => {
        const BlogData = {
            title:data.title,
            description:data.description,
            image:data.blogImage,
            author:{
                name:data.authorName,
                image:data.authorImage
            }
        }
        try {
          const response = await axios.post(`https://meta-blog-backend-1mqx.vercel.app/blogs/add-post`,BlogData)
          alert("blog add sucessfully")
          reset()
        } catch (error) {
          console.log(error.message);
        }
    }

  return (
    <div className='container max-w-7xl mx-auto px-4 py-24'>
        <h2>Add New Blog</h2>

          <form onSubmit={handleSubmit(onSubmit)} className='bg-white max-w-3xl p-6 rounded-lg shadow-md'>
                        <InputField  register={register("title", { required: true })} label="Blog Title" id="title" type='text' placeholder="Blog title" />

                        <TextArea label="Blog description"  register={register("description", { required: true })} placeholder="blog description" id="description" type="text"/>
                        <InputField label="Author Title"  register={register("authorName", { required: true })} id="authorName" type='text' placeholder="author name" />
                        <InputField label="Author image Url"  register={register("authorImage", { required: true })} id="authorImage" type='url' placeholder="author image url" />
                        <InputField label="Blog image url"  register={register("blogImage", { required: true })} id="blogImage" type='url' placeholder="blog image url" />

                   
                    <div className='mt-3'>
                        <button
                        type='submit'
                        className='w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Send Message</button>
                    </div>
                 </form>
    </div>
  )
}

export default AddBlog