import React from 'react';
import {Grid} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const FormAddIssue = () => {
    return (
        <Grid xs={12} style={{
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20
        }}>
            <TextField
                label='Add task'
                defaultValue={''}
                style={{
                    marginRight: 10
                }}
            />
            <Button
                variant="contained"
                style={{
                    height: '100%'
                }}
            >
                Add
            </Button>
        </Grid>
    );
};

export default FormAddIssue;
