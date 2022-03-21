import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RatingResult from '../Rating/RatingResult';
import style from './DetailCard.module.css';

function DetailCard() {
  const {id}=useParams();
  const {allToys} = useSelector(state => state.toyReducer)
  
   const toy = allToys.filter(toy=>toy.id === +id)
   const path = `http://localhost:7000/${toy[0].img}`
  return (
    <>
    <span class="card-title">{toy[0].name}</span>
    <div className={style.detailCard}>
       <img class="materialboxed" width="650" src={path}/>
       <div className={style.bloc2}>
         <RatingResult/>
<div className={style.removeAdd}>
<a class=" waves-effect waves-light btn-small"><i class="material-icons">remove</i></a>
<p>2</p>
<a class="waves-effect waves-light btn-small"><i class="material-icons">add</i></a>
</div>
<button class="btn waves-effect waves-light" type="submit" name="action">Добавить в корзину
    <i class="material-icons right">add_shopping_cart</i>
  </button>
       </div>
    </div>
    <div>
      <p></p>
    </div>
    </>
  );
}

export default DetailCard;
