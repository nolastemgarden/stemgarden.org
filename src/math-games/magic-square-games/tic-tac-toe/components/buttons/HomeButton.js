import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
<<<<<<< Updated upstream

// MUI Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
=======
import { Box, Button } from '@mui/material';
>>>>>>> Stashed changes

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function HomeButton() {
  return (
    <Button
      component={RouterLink}
      to='../'
      variant="contained"
      color="primary"
      sx={{ flexGrow: 1, mx: 1 }}
    >
      <Box mr={1} display="flex" alignContent="center" >
        <FontAwesomeIcon icon={faHouse} size='lg' />
      </Box>
      Home
    </Button>
  )
}