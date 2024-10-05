import axios from 'axios';

// Base URL for the API
const BASE_URL = '/api/clients';

// Client Service
const clientService = {

  // Create a new client
  createClient: async (clientData) => {
    try {
      const response = await axios.post(BASE_URL, { ...clientData });
      return {
        success: true,
        message: 'Client created successfully',
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while creating the client',
      };
    }
  },

  // Verify a client
  verifyClient: async (clientId) => {
    try {
      const response = await axios.patch(`${BASE_URL}/${clientId}/verify`);
      return {
        success: true,
        message: 'Client has been verified',
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while verifying the client',
      };
    }
  },

  // Update a client profile
  updateClient: async (clientId, clientData) => {
    try {
      const response = await axios.put(`${BASE_URL}/${clientId}`, clientData);
      return {
        success: true,
        message: 'Client profile has been updated',
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while updating the client profile',
      };
    }
  },

  // Get a client profile by ID
  getClientById: async (clientId) => {
    try {
      const response = await axios.get(`${BASE_URL}/${clientId}`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while fetching the client profile',
      };
    }
  },

  // Get clients by agent ID
  getClientsByAgentId: async (agentId) => {
    try {
      const response = await axios.get(`${BASE_URL}/agent/${agentId}`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while fetching clients for the agent',
      };
    }
  },

  // Delete a client by ID
  deleteClient: async (clientId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${clientId}`);
      return {
        success: true,
        message: 'Client with ClientID deleted successfully',
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while deleting the client',
      };
    }
  },
};

export default clientService;
