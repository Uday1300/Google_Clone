import React from 'react';
import './search.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../pages/Google'; 
import { Link } from 'react-router-dom';
import SearchPages from './SearchPages'
import SearchIcon from '@mui/icons-material/Search'; 
import FeedIcon from '@mui/icons-material/Feed';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Search() { 
  const [{ term }, dispatch] = useStateValue();
  const data = useGoogleSearch(term); 

  return (
    <div className='search'>
      <div className="search_header">
        <div className="search_1">
        <Link to="/">
          <img className="Google_search_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5RQrFu2n1zcLMjm9eb0SFWP2aKzZHCYuUrMG1Q525&s" alt="" />
        </Link>
       </div>
       <div className="search_result">
         <SearchPages />
        <div className="search_option">
          <div className="option_left">
            <div className="search_option">
              <SearchIcon />
              <Link to='/all'>ALL</Link>
            </div>
            <div className="search_option">
              <FeedIcon />
              <Link to='/news'>News</Link>
            </div>
            <div className="search_option">
              <ImageSearchIcon />
              <Link to='/images'>Images</Link>
            </div>
            <div className="search_option">
              <ShoppingCartIcon />
              <Link to='/shopping'>Shopping</Link>
            </div>
            <div className="search_option">
              <MapsHomeWorkIcon />
              <Link to='/maps'>Maps</Link>
            </div>
            <div className="search_option">
              <ExpandMoreIcon />
              <Link to='/more'>More</Link>
            </div>
          </div>
          <div className="option_right">
            <div className="search_option">
              <Link to="/setting">Setting</Link>
            </div>
            <div className="search_option">
              <Link to="/tools">Tools</Link>
            </div>
          </div>
        </div>
       </div>
       </div>
       {term && data && (
        <div className="search_results_pp">
          <p className="result_counts">
            About {data.searchInformation.formattedTotalResults} results
            ({data.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data.items.map((item, index) => (
            <div className="search_results_pages">
              <a href={item.link}>{item.displayLink}</a>
              <a className="search_result_title" href={item.link}>
               <h2> {item.title}</h2></a>
               <p className='search_sinnpet'>
                {item.snippet}
               </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
