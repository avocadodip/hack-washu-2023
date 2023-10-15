import React, { useState } from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Dialogue from './Dialogue';
import Grid from '@mui/material/Grid';

function Form({ onSubmit, loading }) {
  const [nature, setNature] = useState('');

  const handleNatureChange = (event) => {
    setNature(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      nature
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit} className="form-style">
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <TextField
                id="filled-basic"
                label="Design your world..."
                variant="filled"
                type="text"
                value={nature}
                onChange={handleNatureChange}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                style={{ height: '40px' }}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={20} style={{ color: 'white', marginLeft: '10px' }} />
                ) : (
                  'Generate'
                )}
              </Button>
            </Grid>
            <Grid item xs={3} style={{ display: 'flex', alignItems: 'flex-end' }}>
            <Dialogue />
            </Grid>
            <Grid item>
              We reccommend trying these keywords: forest,
                        pyramid,
                        checkerboard,
                      goaland,
                       yavapai,
                         goldmine,
                      arches,
                      threetowers,
                       poison,
                        tron,
                      japan,
                      dream,
                       volcano,
                        starry,
                        osiris.
            </Grid>
          </Grid>
        </form>
      </Grid>

    </Grid>
  );
}

export default Form;