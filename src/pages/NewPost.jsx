import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth(); // kullanıcı bilgisini çekiyoruz

  const createPost = async (postData) => {
    try {
      const response = await axios.post('http://localhost:3001/posts', postData);
      console.log('Gönderi başarıyla oluşturuldu:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Gönderi oluşturulurken bir hata oluştu:', error);
      setError('Gönderi oluşturulurken bir hata oluştu.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title,
      content,
      author: user?.email || 'Bilinmeyen',
      createdAt: new Date().toISOString(),
    };
    createPost(postData);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-semibold">Yeni Gönderi Oluştur</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">Başlık</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 mt-1"
            required
          />
        </div>
        <div>
          <label htmlFor="body" className="block text-sm font-medium">İçerik</label>
          <textarea
            id="body"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border p-2 mt-1"
            rows="6"
            required
          ></textarea>
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white p-2 w-full">Gönderiyi Kaydet</button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
