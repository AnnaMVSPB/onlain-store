import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardToy from '../CardToy/CardToy'
import { toyAT } from '../../redux/actionTypes/toyAT';

// import style from './CardList.module.css';

function CardList() {
  const {filterToys} = useSelector(state => state.toyReducer)
  const {id}=useParams()
  const dispath= useDispatch()
  useEffect(()=>{
    dispath({type:toyAT.FILTER_TYPE ,payload:id})
  },[id])
  

  return (
    <>
    <div className="row">
      {filterToys.map((toy)=><CardToy  key = {toy.id} toy={toy}/>)}
    </div>
    </>
  );
}

export default CardList;
