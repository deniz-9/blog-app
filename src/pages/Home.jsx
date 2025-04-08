import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { fetchPosts } from '../api/blogAPI';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard'; 
 

export const Home = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts', error);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Blog Gönderileri</h1>
      {!user ? (
        <p className="text-gray-600">Giriş yapmak için <Link to="/login" className="text-blue-500">buraya tıklayın</Link>.</p>
      ) : (
        <>
          <div className="mb-4">
            <Link to="/new-post" className="text-white bg-blue-500 p-2 rounded-md hover:bg-blue-600">Yeni Gönderi Oluştur</Link>
          </div>
          {posts.length === 0 ? (
            <p className="text-gray-600">Henüz hiç gönderi bulunmamaktadır.</p>
          ) : (
            posts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))
          )}
        </>
      )}
    </div>
  );
};

export default Home;
