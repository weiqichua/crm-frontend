import axios from 'axios';

// Base URL for the API
const BASE_URL = '/api/users';

// Agent Service
const userService = {

  // Create a new user
  createUser: async (userData) => {
    try {
      const response = await axios.post(BASE_URL, { ...userData });
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while creating the user',
      };
    }
  },

  // Update a user profile
  updateUser: async (userId, userData) => {
    try {
      const response = await axios.put(`${BASE_URL}/${userId}`, userData);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while updating the user profile',
      };
    }
  },

  // Disable a user profile
  disableUser: async (userId) => {
    try {
      const response = await axios.patch(`${BASE_URL}/${userId}/disable`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while disabling the user',
      };
    }
  },

  // Delete a user by ID
  deleteUser: async (userId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${userId}`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while deleting the user',
      };
    }
  },

  // Get all users
  getUsers: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while fetching all users',
      };
    }
  },

  // Get user by ID
  getUserByUserId: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${userId}`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while fetching user',
      };
    }
  },

};

export default userService;
