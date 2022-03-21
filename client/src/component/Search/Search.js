import React from 'react';
import { useDispatch } from 'react-redux';
import {toyAT} from '../../redux/actionTypes/toyAT'


function Search() {
  const dispath = useDispatch()
  return (
    <nav>
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" required onChange={(e)=>dispath({type:toyAT.SEARCH_TOYS,payload:e.target.value})}/>
          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
   
   
  );
}

export default Search;
