import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ============ MESSAGES ============
export const sendMessage = async (data) => {
  try {
    const response = await api.post('/messages', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Network error' };
  }
};

export const getMessages = async () => {
  try {
    const response = await api.get('/messages');
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to fetch messages' };
  }
};

// ============ PROJECTS ============
export const getProjects = async () => {
  try {
    const response = await api.get('/projects');
    return response.data;
  } catch (error) {
    console.error('Get projects error:', error);
    throw error.response?.data || { error: 'Failed to fetch projects' };
  }
};

export const addProject = async (data) => {
  try {
    const response = await api.post('/projects', data);
    return response.data;
  } catch (error) {
    console.error('Add project error:', error);
    throw error.response?.data || { error: 'Failed to add project' };
  }
};

export const updateProject = async (id, data) => {
  try {
    const response = await api.put(`/projects/${id}`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to update project' };
  }
};

export const deleteProject = async (id) => {
  try {
    const response = await api.delete(`/projects/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to delete project' };
  }
};

// ============ SKILLS ============
export const getSkills = async () => {
  try {
    const response = await api.get('/skills');
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to fetch skills' };
  }
};

// ============ EXPERIENCES ============
export const getExperiences = async () => {
  try {
    const response = await api.get('/experiences');
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: 'Failed to fetch experiences' };
  }
};

export default api;