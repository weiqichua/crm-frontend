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

   // get agent logs
   getAgentLogs:async (agentId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${agentId}`);
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

  // get agent logs
  getClientLogs:async (clientId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${clientId}`);
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

  // get agent logs
  getAccountLogs:async (accountId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${accountId}`);
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

}

export default logsService;