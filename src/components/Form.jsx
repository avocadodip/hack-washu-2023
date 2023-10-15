import React, { useState } from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function Form({ onSubmit }) {

  const [nature, setNature] = useState('');
  const [color, setColor] = useState('');

  const handleNatureChange = (event) => {
    setNature(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      nature,
      color
    });
  };

  

  return (
    <form onSubmit={handleSubmit} className="form-style">
      <TextField id="filled-basic" label="Nature" variant="filled" type="text"
        value={nature}
        onChange={handleNatureChange}/>
        
        <TextField id="filled-basic" label="Color" variant="filled" type="text"
        value={color}
        onChange={handleColorChange}/>
        
      <Button type="submit" variant="contained">Generate</Button>
    </form>
  );
}

export default Form;
