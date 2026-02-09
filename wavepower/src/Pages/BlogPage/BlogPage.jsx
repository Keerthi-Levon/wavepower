import React from 'react'
import Blogbanner from '../../Components/BlogPage/Blogbanner'
import "./Blog.css"
import BlogCards from '../../Components/BlogPage/BlogCards'
import LatestNewsPage from '../../Components/BlogPage/LatestNewsPage'
import PressReleasePage from '../../Components/BlogPage/PressReleasePage'
const BlogPage = () => {
  return (
    <div>
      <Blogbanner/>
      <BlogCards/>
      <LatestNewsPage/>
      <PressReleasePage/>
    </div>
  )
}

export default BlogPage