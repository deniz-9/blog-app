import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  
  const content = post.content || ''; 

  return (
    <div className="border border-gray-300 rounded-md p-4 mb-4">
      <h2 className="text-xl font-semibold">
        <Link to={`/posts/${post.id}`} className="text-blue-500 hover:underline">{post.title}</Link>
      </h2>
      <p className="text-gray-600">{content.slice(0, 100)}...</p>
      <p className="text-sm text-gray-400">Yazar: {post.author}</p>
    </div>
  );
};

export default BlogCard;
