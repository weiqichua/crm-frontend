// src/components/CenteredLayout.jsx

import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const CenteredLayout = ({ children }) => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  );
};

CenteredLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CenteredLayout;