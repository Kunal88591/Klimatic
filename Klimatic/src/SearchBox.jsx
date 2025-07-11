import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function Searchbox() {
  let [city, setCity] = useState("");

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
  };

  return (
    <div className='SearchBox'>
      <h3>Klimate</h3>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="city" 
          label="City Name" 
          variant="outlined" 
          required 
          value={city} 
          onChange={handleChange} 
        />
        <br /><br /><br />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
