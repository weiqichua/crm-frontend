// ClientsList.js
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TablePaper from '../components/TablePaper';
import { Button } from '@mui/material';
import api from '../api/mockApi'; // Import the Axios instance
import { AuthContext } from '../contexts/AuthContext'; // Import AuthContext

function ClientsList() {
  
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const [page, setPage] = useState(0);
  const { user } = useContext(AuthContext); // Get the logged-in user from AuthContext


  useEffect(() => {
    // Fetch clients using Axios
    const fetchClients = async () => {
      try {
        const response = await api.get('/clients');

        // Filter clients based on logged-in Agent's ID
        const filteredClients = response.data.filter( (client) => client.agentId === user.id);
        setClients(filteredClients);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, [user.id]);

  const columns = [
    { field: 'id', headerName: 'Client ID', width: 100 },
    { field: 'agentId', headerName: 'Agent ID', width: 100 },
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 220 },
    {
      field: 'verified',
      headerName: 'Verification',
      width: 150,
      renderCell: (params) => (
        <span style={{ color: params.value ? 'green' : 'red' }}>
          {params.value ? 'Verified' : 'Unverified'}
        </span>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate(`/clients/view/${params.row.id}`)}
          sx= {{
            mb: 2
          }}
        >
          View More
        </Button>
      ),
    },
  ];

  return (
    <TablePaper
      title="Clients"
      rows={clients}
      columns={columns}
      page={page}
      setPage={setPage}
      onAddClick={() => navigate('/agent/clients/create')}
    />
  );
}

export default ClientsList;
