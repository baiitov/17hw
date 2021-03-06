import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const NoAlert = () => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error">Request failed</Alert>
            </Stack>
    );
};

export default NoAlert;