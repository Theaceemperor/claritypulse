'use client'

import React from "react";
import { BlogPostList, Pagination, SearchBar } from "../components/reuseable";

export default function BlogListPage() {
  // Dummy data for blog posts
  const dummyPosts = [
    { id: 1, title: 'Post 1', category: 'Technology', excerpt: 'Lorem ipsum dolor sit amet...' },
    { id: 2, title: 'Post 2', category: 'Travel', excerpt: 'Lorem ipsum dolor sit amet...' },
    // ... add more dummy posts
  ];

  const [currentPage, setCurrentPage] = React.useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(dummyPosts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dummyPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (searchTerm) => {
    // Implement your search logic here
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="px-2">
      <h1 className="text-4xl font-bold mb-8">Blog Post Listing</h1>
      <SearchBar onSearch={handleSearch} />
      <BlogPostList posts={currentPosts} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};
