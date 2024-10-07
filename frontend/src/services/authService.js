import axios from 'axios';

// Base URL for the API
const BASE_URL = '/api/auth';

// Agent Service
const userService = {

  // Create a new user
  login: async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, { ...userData });
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

  // reset user email
  resetPassword: async (userEmail) => {
    try {
      const response = await axios.post(`${BASE_URL}/reset-password`, { ...userEmail });
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

  // reset user email
  confirmResetPassword: async (userEmail) => {
    try {
      const response = await axios.post(`${BASE_URL}/confirm-reset`, { ...userEmail });
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
};

export default userService;
