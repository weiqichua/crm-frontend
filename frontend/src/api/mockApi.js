// mockApi.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Create Axios instance
const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Base URL for your backend
  timeout: 1000,
});

// Create an instance of Axios Mock Adapter
const mock = new MockAdapter(api);

// Mock some initial data for clients, accounts, and transactions
let clients = [
  { id: 1, agentId: 2, firstName: 'John', lastName: 'Doe', email: 'john@example.com', verified: false },
  { id: 2, agentId: 3, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', verified: true },
];

let accounts = {
  1: [
    { id: 101, clientId: 1, accountType: 'Savings', balance: 5000, status: 'active' },
    { id: 102, clientId: 1, accountType: 'Checking', balance: 2500, status: 'active' },
  ],
  2: [
    { id: 103, clientId: 2, accountType: 'Savings', balance: 7500, status: 'active' },
  ],
};

let transactions = {
  101: [
    { id: 201, accountId: 101, type: 'Deposit', amount: 500, date: '2024-09-24', status: 'Completed' },
    { id: 202, accountId: 101, type: 'Withdrawal', amount: 200, date: '2024-09-23', status: 'Completed' },
  ],
  102: [
    { id: 203, accountId: 102, type: 'Deposit', amount: 1500, date: '2024-09-22', status: 'Completed' },
  ],
  103: [
    { id: 204, accountId: 103, type: 'Deposit', amount: 2000, date: '2024-09-21', status: 'Completed' },
  ],
};

// Set up mock routes for clients
mock.onGet('/clients').reply(200, clients);

mock.onPost('/clients').reply((config) => {
    const newClient = JSON.parse(config.data);
    newClient.id = clients.length + 1; // Add a unique ID to the new client
    clients.push(newClient); // Add the new client to the mock clients array
    return [201, newClient]; // Return a success response with the new client
});

mock.onPut(/\/clients\/\d+/).reply((config) => {
  const clientId = parseInt(config.url.split('/').pop());
  const updatedClient = JSON.parse(config.data);
  clients = clients.map((client) => (client.id === clientId ? updatedClient : client));
  return [200, updatedClient];
});

mock.onDelete(/\/clients\/\d+/).reply((config) => {
  const clientId = parseInt(config.url.split('/').pop());
  clients = clients.filter((client) => client.id !== clientId);
  return [200];
});

// Set up mock routes for accounts and transactions based on client ID
mock.onGet(/\/clients\/\d+\/accounts/).reply((config) => {
  const clientId = parseInt(config.url.split('/')[2]);
  return [200, accounts[clientId] || []];
});

mock.onGet(/\/accounts\/\d+\/transactions/).reply((config) => {
  const accountId = parseInt(config.url.split('/')[2]);
  return [200, transactions[accountId] || []];
});

export default api;
