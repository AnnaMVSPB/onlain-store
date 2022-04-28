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
      <div className={`${style.card_content}`}>
        <p>{toy.name}</p>
        <div>
        <label for="first_name">цена за 1</label>
         <p>{`${toy.price} р`}</p>
        </div>
        
        <div onClick={()=>dispath(subtractPurchaseAC(toy))}><i class="material-icons prefix">chevron_left</i></div>
        <p>{toy.amount}</p>
        <div onClick={() => dispath(addPurchaseAC(toy))}><i class="material-icons prefix">chevron_right</i></div>
       
      </div>
    </div>
  );
}

export default CardCart;
