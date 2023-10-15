<<<<<<< Updated upstream
import React, { useState } from 'react';

function Form({ onSubmit, onInputChange, input }) {
  const [parameters, setParameters] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(parameters);
=======
import React from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

function Form({ handleSubmit, loading, input, setInput }) {

  const handleInputChange = (event) => {
    setInput(event.target.value);
>>>>>>> Stashed changes
  };

  return (
    <form onSubmit={handleSubmit} className="form-style">
<<<<<<< Updated upstream
      <input
        type="text"
        value={input}
        onChange={(e) => onInputChange(e.target.value)} 
        placeholder="Describe your world..."
      />
      <button type="submit">Generate</button>
=======
      <TextField id="filled-basic" label="Design your world..." variant="filled" type="text"
        value={input}
        onChange={handleInputChange}/>
      <Button type="submit" variant="contained" style={{height: '40px'}} disabled={loading || !input.trim()}>
        {loading ? <CircularProgress size={20} style={{color: 'white', marginLeft: '10px'}} /> : 'Generate'}
      </Button>
>>>>>>> Stashed changes
    </form>
  );
}

export default Form;
