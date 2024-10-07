import axios from 'axios';

const BASE_URL = '/api/transactions';

const transactionService = {
   // get all transactions
   getTransactions:async () => {
    try {
      const response = await axios.get(BASE_URL);
      return {
        sucess: true,
        data: response.data,
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occured when getting the transactions'
      }
    }
  },

  // Get all transactions from Client
  getClientTransactions: async (clientId) => {
    try {
      const response = await axios.get(`${BASE_URL}/clients/${clientId}`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while fetching client transactions',
      };
    }
  },

  // Get all transactions of account
  getAccountTransactions: async (accountId) => {
    try {
      const response = await axios.get(`${BASE_URL}/accounts/${accountId}`); // Unique endpoint for client accounts
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while fetching transactions of the account',
      };
    }
  },
};

export default transactionService;
