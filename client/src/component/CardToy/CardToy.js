import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import style from './Card.module.css';
import { addPurchaseAC } from '../../redux/actionCreators/toyAC';

function CardToy({ toy }) {
  const dispath = useDispatch()
  let navigation = useNavigate();
  const path = `http://localhost:7000/${toy.img}`
  function addPurchase() {
    dispath(addPurchaseAC(toy))
  }

  return (

    <div className="col s12 m6 l3 ">
      <div className="card z-depth-5">
        <div className={style.width} onClick={() => navigation(`/detailCard/${toy.id}`)}>
          <img src={path} className="materialboxed" width="300" hide="300" alt='img' />
        </div>
        <button onClick={addPurchase} className="btn-floating btn-large  waves-effect waves-light light-blue darken-1 right"><i className="material-icons">add_shopping_cart</i></button>
        <div className="card-content  light-blue lighten-3">
          <p> {toy.name}</p>
          <p>{`${toy.price} р`}</p>
        </div>
      </div>
    </div>



  );
}

export default CardToy;
