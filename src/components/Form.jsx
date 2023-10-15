import React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from './Modal';
import Grid from '@mui/material/Grid';

function Form({ handleSubmit, loading, input, setInput }) {

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit} className="form-style">
          <Grid container spacing={0}>
            <Grid item xs={11}>
              <TextField 
                id="filled-basic" 
                label="Design your world..." 
                variant="filled" 
                type="text"
                value={input}
                onChange={handleInputChange}
                InputLabelProps={{
                  style: { color: '#FFFFFF', opacity: 0.6 },
                }}
                InputProps={{
                  style: { color: '#FFFFFF' },
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={1} style={{ display: 'flex', alignItems: 'flex-end' }}>
              <Modal />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" style={{height: '40px'}} disabled={loading || !input.trim()}>
                {loading ? <CircularProgress size={20} style={{color: 'white', marginLeft: '10px'}} /> : 'Generate'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default Form;
