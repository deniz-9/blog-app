import axios from "axios";

const BASE_URL = "http://localhost:3001";

// Kullanıcı girişi
export const loginUser = async (email, password) => {
  try {
    const response = await axios.get(`${BASE_URL}/users`, {
      params: { email, password },
    });
    return response.data[0];
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};

// Yeni kullanıcı kaydı
export const registerUser = async (user) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, user);
    return response.data;
  } catch (error) {
    console.error("Registration failed", error);
    throw error;
  }
};

// Postları listele
export const fetchPosts = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/posts?_sort=createdAt&_order=desc`
    );
    return response.data;
  } catch (error) {
    console.error("Fetch posts failed", error);
    throw error;
  }
};

// Tek bir postu al
export const fetchPostById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Fetch post by ID failed", error);
    throw error;
  }
};

// Yeni bir post oluştur
export const createPost = async (post) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts`, post);
    return response.data;
  } catch (error) {
    console.error("Create post failed", error);
    throw error;
  }
};
