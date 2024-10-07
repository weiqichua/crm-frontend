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

  // Delete a client by ID
  deleteClient: async (clientId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${clientId}`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while deleting the client',
      };
    }
  },

  // Get clients by agent ID
  getAgentClients: async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/users/${userId}`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data || 'An error occurred while fetching agent clients',
      };
    }
  },
  
};

export default clientService;
