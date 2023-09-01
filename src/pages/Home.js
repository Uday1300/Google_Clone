import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchPage from './SearchPages'; 

const Home = () => {
  return (
    <div>
      <div className="home_header">
        <div className="home_header_left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home_header_right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/Images">Images</Link>
          <AppsIcon />
          <AccountCircleIcon />
        </div>
      </div>
      <div className="home_body">
       
        <img
          src="https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif"
          alt=""
        />
      </div>
      <div className="input_container">
        <SearchPage hideButtons/>
      </div>
    </div>
  );
};

export default Home;
