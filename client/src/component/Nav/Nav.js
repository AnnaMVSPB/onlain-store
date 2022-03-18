import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import './nav.css';

function Nav() {
  return (
    <>

       <div className="nav">
        <Link to="/">главная</Link>
        <Search/>
       <div >
        <Link   to="/login"><h2>Войти</h2></Link>
        <Link to="/cart"><h2>Корзина</h2></Link>
        </div>
      </div>
      <div className="nav">
        <Link to="/categori/1"><h2>Мягкие игрушки</h2></Link>
        <Link to="/categori/2"><h2>Куклы</h2></Link>
        <Link to="/categori/3"><h2>Машинки</h2></Link>
        
      </div> 
    </>
  );
}

export default Nav;
