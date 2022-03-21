import React from 'react';
import { useNavigate } from "react-router-dom";
import style from './Card.module.css';

function CardToy({toy}) {
  let navigation = useNavigate();
  const path = `http://localhost:7000/${toy.img}`


  return (

    <div className="col s12 m6 l3">
      <div className="card">
        <div className={style.width} onClick={()=>navigation(`/detailCard/${toy.id}`)}>
          <img src={path} className="materialboxed" width="300" hide="300" />
        </div>
        <a className="btn-floating btn-large  waves-effect waves-light red right"><i className="material-icons">add</i></a>
        <div className="card-content">
          <p> {toy.name}</p>
          <p>{`${toy.price} р`}</p>
        </div>
      </div>
    </div>
 
     
  );
}

export default CardToy;
