import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

export default function Copyright() {
    return (
        <Box mt={10} mb={5}>
            <Typography variant="body2" color="primary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="/">
                Andrei Dimitrascu
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
  }