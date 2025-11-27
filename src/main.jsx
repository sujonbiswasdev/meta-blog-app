import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Home from './page/home/Home.jsx';
import Blogs from './page/blog/Blogs.jsx';
import About from './page/about/About.jsx';
import Contact from './page/contact/Contact.jsx';
import AddBlog from './page/blog/add-blog/AddBlog.jsx';
import ManageBlogs from './page/blog/manageBlog/ManageBlogs.jsx';
import Update from './page/blog/manageBlog/Update.jsx';
import BlogDetails from './page/blog/BlogDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
       {
        path:'/',
        element:<Home/>
       },
       {
        path:'/blogs',
        element:<Blogs/>
       },
        {
        path:'/blogs/:id',
        element:<BlogDetails/>
       },
        {
        path:'/add-blog',
        element:<AddBlog/>
       },
       {
        path:'/manage-blog',
        element:<ManageBlogs/>
       },
       {
        path:"/blogs/edit/:id",
        element:<Update/>
       },
       {
        path:'/about',
        element:<About/>
       },
       {
        path:'/contact',
        element:<Contact/>
       },
       {
        path:'*',
        element:<div className='text-red-600'>404 Error</div>
       }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
