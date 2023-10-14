import React, { useState } from 'react';

function Form({ onSubmit, onInputChange, input }) {
  const [parameters, setParameters] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(parameters);
  };

  return (
    <form onSubmit={handleSubmit} className="form-style">
      <input
        type="text"
        value={input}
        onChange={(e) => onInputChange(e.target.value)} 
        placeholder="Describe your world..."
      />
      <button type="submit">Generate</button>
    </form>
  );
}

export default Form;
