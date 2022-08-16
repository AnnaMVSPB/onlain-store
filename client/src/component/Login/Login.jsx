import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUserAC } from '../../redux/actionCreators/usersAC'
import style from './login.module.css';

function Login() {
  const emailInput = useRef()
  const passwordInput = useRef()
  const dispath = useDispatch()

  const loginFormSubmit = (e) => {
    e.preventDefault()
    const data = { email: emailInput.current.value, password: passwordInput.current.value }
    dispath(loginUserAC(data))
  }
  return (
    <>
            <div className={style.flex}>
              <div className="row">
                <form className="col s12" onSubmit={loginFormSubmit}>
                  <div className={style.form}>
                    <div className={style.margin} >
                      <i className="material-icons prefix">email</i>
                      <label htmlFor="icon_prefix">Email</label>
                      <input ref={emailInput} id="email" type="email" className="validate" />
                    </div>
                    <div className={style.margin}>
                      <i className="material-icons prefix">https</i>
                      <label htmlFor="icon_telephone">Password</label>
                      <input ref={passwordInput} id="password" type="password" className="validate" />
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Войти
                      <i className="material-icons right">send</i>
                    </button>
                    <p>Если вы еще не зарегистрированны то <Link to="/registration">сделайте это</Link></p>
                  </div>
                </form>
              </div>
            </div>
      </>
  );
}

export default Login;
