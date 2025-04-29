
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import BlogPost from "@/components/BlogPost";

const Blog = () => {
  const { slug } = useParams();
  
  useEffect(() => {
    document.title = slug 
      ? `${getBlogPostBySlug(slug)?.title || 'Post Not Found'} | Parag Sehra Blog` 
      : "Parag Sehra | Blog";
  }, [slug]);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {slug ? <BlogPost slug={slug} /> : <BlogList />}
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
