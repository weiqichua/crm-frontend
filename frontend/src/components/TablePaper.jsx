import { Paper, Box, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';

function TablePaper({
  title, // The title to display (Clients, Client Transactions, etc.)
  rows, // Rows for the DataGrid
  columns, // Columns for the DataGrid
  page, // Current page number for pagination
  setPage, // Function to update page number
  clientId, // Optional client ID to display in the title
  clientName, // Optional client name to display in the title
  accountId, // Optional account ID to display in the title (if inside an Account view)
  onAddClick, // Function for add button (optional)
  actionButtons, // Array of buttons or elements for the action area above the title
}) {
  return (
    <Paper sx={{ padding: '1em', margin: '2em auto', display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
      
      {/* Action Buttons Section */}
      {actionButtons && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '1rem' }}>
          {actionButtons.map((button, index) => (
            <Box key={index} sx={{ marginRight: '1rem' }}>
              {button}
            </Box>
          ))}
        </Box>
      )}
      
      {/* Title Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem' }}>
        <Box>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>

          {/* Show Client ID and Name */}
          {clientId && (
            <Typography variant="subtitle1">
              Client ID: {clientId} | Name: {clientName}
            </Typography>
          )}

          {/* Show Account ID if present */}
          {accountId && (
            <Typography variant="subtitle2">
              Account ID: {accountId}
            </Typography>
          )}
        </Box>

        {/* Optional Add Button */}
        {onAddClick && (
          <Button variant="contained" onClick={onAddClick}>
            Add {title}
          </Button>
        )}
      </Box>

      {/* DataGrid Section */}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        page={page}
        onPageChange={(newPage) => setPage(newPage)}
        rowHeight={40}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        sx={{
          height: '520px',
          border: 0,
          flexGrow: 1,
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#f5f5f5',
            fontSize: '1rem',
            fontWeight: 'bold',
          },
          '& .MuiDataGrid-cell': {
            justifyContent: 'center',
            padding: '7px',
          },
        }}
      />
    </Paper>
  );
}

TablePaper.propTypes = {
  title: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  clientId: PropTypes.string, // Optional client ID
  clientName: PropTypes.string, // Optional client name
  accountId: PropTypes.string, // Optional account ID
  onAddClick: PropTypes.func, // Optional function for "Add" button
  actionButtons: PropTypes.arrayOf(PropTypes.node), // Array of custom buttons or elements
};

export default TablePaper;
