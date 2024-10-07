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

  // Get accounts by client ID
  getClientAccounts: async (clientId) => {
    try {
      const response = await axios.get(`${BASE_URL}/clients/${clientId}`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while fetching accounts of the client',
      };
    }
  },

  // Bulk delete accounts by client ID
  deleteClientAccounts: async (clientId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/clients/${clientId}`); // Unique endpoint for bulk delete
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while deleting all client accounts',
      };
    }
  },

};

export default accountService;
