import React from 'react';
import { useDispatch } from 'react-redux';
import { addPurchaseAC, subtractPurchaseAC } from '../../redux/actionCreators/toyAC';
import style from './CardCart.module.css'

function CardCart({ toy }) {
const dispath = useDispatch()

  const path = `http://localhost:7000/${toy.img}`
  return (
    <div className={style.card}>
      <div><img src={path} className="materialboxed" width="100" hide="100" alt='img' /></div>
      <div className={style.card_content}>
        <p className={style.sizeP}>{toy.name}</p>
        <div className={style.sizeP}>
        <label for="first_name"> цена за 1 ед. товара </label>
         <p>{`${toy.price} р`}</p>
        </div>
        <div className={style.sizeButton}>
        <div  className={style.button} onClick={()=>dispath(subtractPurchaseAC(toy))}><i class="material-icons prefix">chevron_left</i></div>
        <div>{toy.amount}</div>
        <div className={style.button} onClick={() => dispath(addPurchaseAC(toy))}><i class="material-icons prefix">chevron_right</i></div>
        </div>
      </div>
    </div>
  );
}

export default CardCart;
