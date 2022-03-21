import React from 'react';
import style from './Rating.module.css'

function RatingResult(props) {
  return (
    <div className={style.ratingResult}>
	<span className="active"></span>	
	<span className="active"></span>    
	<span className="active"></span>  
	<span></span>    
	<span></span>
  <p> 0 отзывов</p>
</div>
  );
}

export default RatingResult;
