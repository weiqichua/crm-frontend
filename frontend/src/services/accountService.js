import axios from 'axios';

const BASE_URL = '/api/accounts';

const accountService = {
  // Create a new account
  createAccount: async (accountData) => {
    try {
      const response = await axios.post(BASE_URL, { ...accountData });
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while creating the account',
      };
    }
  },

  // Get an account profile by ID
  getAccountById: async (accountId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${accountId}`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while fetching the account profile',
      };
    }
  },

  // Get accounts by client ID
  getAccountsByClientId: async (clientId) => {
    try {
      const response = await axios.get(`${BASE_URL}/client/${clientId}`); // Unique endpoint for client accounts
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while fetching accounts for the client',
      };
    }
  },

  // Delete an account by ID
  deleteAccount: async (accountId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${accountId}`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while deleting the account',
      };
    }
  },

  // Bulk delete accounts by client ID
  deleteAccountsByClientId: async (clientId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/client/${clientId}`); // Unique endpoint for bulk delete
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while deleting accounts for the client',
      };
    }
  },
};

export default accountService;
