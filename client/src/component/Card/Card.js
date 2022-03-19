import React from 'react';
import style from './Card.module.css';

function CardToy({toy}) {
  const path = `http://localhost:7000/${toy.img}`


  return (

    <div class="col s12 m6 l3">
      <div class="card">
        <div className={style.width} >
          <img src={path} className="materialboxed" width="300" hide="300"/>
        </div>
        <a class="btn-floating btn-large  waves-effect waves-light red right"><i class="material-icons">add</i></a>
        <div class="card-content">
          <p> {toy.name}</p>
          <p>{`${toy.price} р`}</p>
        </div>
      </div>
    </div>
 
     
  );
}

export default CardToy;
