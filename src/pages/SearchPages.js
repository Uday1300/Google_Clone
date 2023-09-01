import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './SearchPages.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useStateValue } from '../StateProvider';
import { actiontypes } from '../reducer';


function SearchPages({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate(); 

  const search = e => {
    e.preventDefault();
    dispatch ({
      type: actiontypes.SET_SEARCH_TERM,
      term :input
    })
    navigate('/search');
  }
  
  return (
    <form className='Search'>
      <div className="search_input">
        <SearchIcon className='search_input_icon' /> 
        <input value={input} onChange={e => setInput(e.target.value)}/>
        <MicIcon />
      </div>
      
      {hideButtons ? (
        <div className="search_buttons">
          <button type='submit' onClick={search} variant="outline">Google Search</button>
          <button variant="outline">I'm Feeling Lucky</button>
        </div>
      ) : (
        <div className="search_buttons">
          <button className="search_button_hidden"type='submit' onClick={search} variant="outline">Google Search</button>
          <button className="search_button_hidden" variant="outline">I'm Feeling Lucky</button>
        </div>
      )}
    </form>
  );
}

export default SearchPages;
