import React from "react";
import Blogbanner from "../../Components/BlogPage/Blogbanner";
import "./Blog.css";
import BlogCards from "../../Components/BlogPage/BlogCards";
import LatestNewsPage from "../../Components/BlogPage/LatestNewsPage";
import PressReleasePage from "../../Components/BlogPage/PressReleasePage";
import TrustedBy from "../../Components/Home/TrustedBy";
import RealStories from "../../Components/Home/RealStories";
import BecameAPartner from "../../Components/Home/BecameAPartner";
const BlogPage = () => {
  return (
    <div>
      <Blogbanner />
      <BlogCards />
      <LatestNewsPage />
      <PressReleasePage />
      <TrustedBy />
      <RealStories/>
      <BecameAPartner/>
    </div>
  );
};

export default BlogPage;
