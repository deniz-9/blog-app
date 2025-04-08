import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../api/blogAPI';

export const PostDetail = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const postDetails = await fetchPostById(id);
        setPost(postDetails);
      } catch (error) {
        console.error('Error fetching post details', error);
      }
    };
    getPost();
  }, [id]);

  if (!post) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="border border-gray-300 rounded-md p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-4">{post.content}</p>
        <p className="text-sm text-gray-400">Yazar: {post.author}</p>
        <p className="text-sm text-gray-400">{new Date(post.createdAt).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default PostDetail;