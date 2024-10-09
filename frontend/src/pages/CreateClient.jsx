import { useState, useContext } from 'react';
import { Paper, TextField, Button, Typography, Box, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../api/mockApi';
import { AuthContext } from '../contexts/AuthContext'; 

const genders = ['Male', 'Female', 'Other'];

function CreateClient() {
    const { user } = useContext(AuthContext); // Fetch user from AuthContext
    const [client, setClient] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
        country: '',
        postalCode: '',
        isVerified: false,
        agentId: user.id, // Associate client with the logged-in agent
    });

    const navigate = useNavigate(); // Get the navigate function from the hook

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            const response = await api.post('/clients', client); // Post new client data to the mock API
            console.log('Client created successfully:', response.data);
            navigate('/agent/clients'); // Navigate back to the list of clients
        } catch (error) {
            console.error('Error creating client:', error);
        }
    };

    const handleChange = (e) => {
        setClient({
            ...client,
            [e.target.name]: e.target.value,
        });
    };

    const handleCancel = () => {
        navigate('/agent/clients'); // Navigate back to the client list without adding
    };

    return (
        <Paper sx={{ padding: '2em', maxWidth: 600, margin: '2em auto' }}>
            <Typography variant="h5" component="h2" gutterBottom>
                Add Client
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit} // Ensure form submit triggers handleSubmit
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 2,
                    mb: 3,
                }}
            >
                <TextField
                    label="First Name"
                    name="firstName"
                    value={client.firstName}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    value={client.lastName}
                    onChange={handleChange}
                    required
                />
                <TextField
                    select
                    label="Gender"
                    name="gender"
                    value={client.gender}
                    onChange={handleChange}
                    required
                >
                    {genders.map((gender) => (
                        <MenuItem key={gender} value={gender}>
                            {gender}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                    value={client.dateOfBirth}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={client.email}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    value={client.phoneNumber}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Country"
                    name="country"
                    value={client.country}
                    onChange={handleChange}
                    required
                />
                <div></div>
                <TextField
                    label="City"
                    name="city"
                    value={client.city}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="State"
                    name="state"
                    value={client.state}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Address"
                    name="address"
                    value={client.address}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Postal Code"
                    name="postalCode"
                    value={client.postalCode}
                    onChange={handleChange}
                    required
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2 }}> 
                    <Button variant="contained" color="primary" type="submit">
                        Add Client
                    </Button>
                    <Button variant="outlined" onClick={handleCancel}>
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
}

export default CreateClient;
