import React from 'react';
import { useSelector } from 'react-redux';
import CardToy from '../Card/Card'
// import style from './CardList.module.css';

function CardList() {
  const {allToys} = useSelector(state => state.toyReducer)
  
  return (
    <div className="row">
      {allToys.map((toy)=><CardToy  key = {toy.id} toy={toy}/>)}
    </div>
  );
}

export default CardList;
