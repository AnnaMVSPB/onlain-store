import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addPurchaseAC, subtractPurchaseAC } from '../../redux/actionCreators/toyAC';
import RatingResult from '../Rating/RatingResult';
import style from './DetailCard.module.css';

function DetailCard() {
  const { id } = useParams();
  const { allToys, cart } = useSelector(state => state.toyReducer)
  const dispath = useDispatch()

  const toy = allToys.filter(toy => toy.id === +id)
  const path = `http://localhost:7000/${toy[0].img}`
  const amount = cart.filter(toy => toy.id === +id)
  return (
    <>

      <div className={style.detailCard}>
        <img className="materialboxed" width="650" src={path} alt="img" />
        <div className={style.bloc2}>
          <h2 className="card-title">{toy[0].name}</h2>
          {/* <RatingResult rating={toy[0].rating} /> */}
          <div className={style.removeAdd}>
            <button  onClick={()=>dispath(subtractPurchaseAC(toy[0]))}className=" waves-effect waves-light btn-small"><i className="material-icons">remove</i></button>
            {amount.length > 0 ? <p>{amount[0].amount}</p> : <p>0</p>}
            <button onClick={() => dispath(addPurchaseAC(toy[0]))} className="waves-effect waves-light btn-small"><i className="material-icons">add</i></button>
          </div>
        </div>
      </div>
      <div>
        <p>{toy[0].Toy_info.description}</p>
      </div>
    </>
  );
}

export default DetailCard;
