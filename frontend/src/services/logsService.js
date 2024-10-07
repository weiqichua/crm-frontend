import axios from 'axios'

const BASE_URL = '/api/logs';

const logsService = {
  // get all logs
  getLogs:async () => {
    try {
      const response = await axios.get(BASE_URL);
      return {
        sucess: true,
        data: response.data,
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occured when getting the logs'
      }
    }
  },

  // get logs relating to client
  getUserLogs:async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${userId}`);
      return {
        sucess: true,
        data: response.data,
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occured when getting the user logs'
      }
    }
  },

  // get logs relating to client
  getClientLogs:async (clientId) => {
    try {
      const response = await axios.get(`${BASE_URL}/clients/${clientId}`);
      return {
        sucess: true,
        data: response.data,
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occured when getting the client logs'
      }
    }
  },

  // get logs relating to account
  getAccountLogs:async (accountId) => {
    try {
      const response = await axios.get(`${BASE_URL}/accounts/${accountId}`);
      return {
        sucess: true,
        data: response.data,
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occured when getting the account logs'
      }
    }
  },

}

export default logsService;