import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import './nav.css';

function Nav() {
  return (
    <>
      <div className="nav">
        <Link to="/">fff</Link>
        <Search/>
        <Link to="/login"><h2>Войти</h2></Link>
        <Link to="/cart"><h2>Корзина</h2></Link>
      </div>
      <div className="nav">
        <Link to="/categori/1"><h2>первая</h2></Link>
        <Link to="/categori/2"><h2>вторая</h2></Link>
        <Link to="/categori/3"><h2>третья</h2></Link>
        <Link to="/categori/4"><h2>четвертая</h2></Link>
      </div>
    </>
  );
}

export default Nav;
