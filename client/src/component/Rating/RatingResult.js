import React from 'react';
import './Rating.css'

function RatingResult({rating}) {
  const arr = [1,2,3,4,5]
  return (
    <div className="ratingResult">
      {arr.map((el,i)=>{
        if(i  < rating){
          console.log(i)
          return 	<span className="active"></span>
        }else{
          return <span></span>
        }
      })}
</div>
  );
}

export default RatingResult;
