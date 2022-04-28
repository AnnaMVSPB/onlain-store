import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Search from '../Search/Search';

import style from './nav.module.css';

function Nav() {
  const { user } = useSelector(state => state.userReducer)
  const [userLS, setUserLS] = useState('')
  const navigation=useNavigate()
  useEffect(() => {
    setUserLS(localStorage.getItem('user'));
    navigation('/')
  }, [user])

  return (
    <>
      <nav>
        <div className="nav-wrapper light-blue darken-4">
          <Link to="/" className="brand-logo">Logo</Link>
          <ul className="right hide-on-med-and-down">
            <li><Search /></li>
            {userLS?.length > 0
              ? <><li><Link to="/cart"><i className="right hide-on-med-and-down">Корзина</i></Link></li>
                <li><Link to="/logout" ><i className="right hide-on-med-and-down">Выйти</i></Link></li></>
              : <><li><Link to="/login"><i className="right hide-on-med-and-down ">Войти</i></Link></li>
                <li><Link to="/cart"><i className="right hide-on-med-and-down">Корзина</i></Link></li></>}
          </ul>
        </div>
      </nav>
      <nav>
        <div className="nav-wrapper light-blue darken-4">
          <ul className={style.nav}>
            <li><Link to="/categori/1"><i>Мягкие игрушки</i></Link></li>
            <li><Link to="/categori/2"><i>Куклы</i></Link></li>
            <li><Link to="/categori/3"><i>Машинки</i></Link></li>
          </ul>
        </div>
      </nav>

      {/* <nav>
    <div classNameName="nav-wrapper">
      <a href="/" classNameName="brand-logo">Logo</a>
      <div className="nav-content">
      </div>
      <ul id="nav-mobile" classNameName="right hide-on-med-and-down">
        <li><a href="/login">Войти</a></li>
        <li><a href="/cart">Корзина</a></li>
       
      </ul>
    </div>
  </nav> */}


      {/* <div classNameName="nav">
        <Link to="/">главная</Link>
        <Search/>
       <div >
        <Link   to="/login"><h2>Войти</h2></Link>
        <Link to="/cart"><h2>Корзина</h2></Link>
        </div>
      </div>
      <div classNameName="nav">
        <Link to="/categori/1"><h2>Мягкие игрушки</h2></Link>
        <Link to="/categori/2"><h2>Куклы</h2></Link>
        <Link to="/categori/3"><h2>Машинки</h2></Link>
        
      </div>  */}
    </>
  );
}

export default Nav;
