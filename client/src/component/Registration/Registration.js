import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserAC } from '../../redux/actionCreators/usersAC'
import style from '../Login/login.module.css';

function Registration() {
  const emailInput = useRef()
  const passwordInput = useRef()
  const dispath = useDispatch()

  const registrationFormSubmit = (e) => {
    e.preventDefault();
    const data = { email: emailInput.current.value, password: passwordInput.current.value }
    dispath(registerUserAC(data))
  }
  return (

    <div className={style.flex}>
      <div className="row">
        <form className="col s12" onSubmit={registrationFormSubmit}>
          <div className={style.form}>
            <div className={style.margin} >
              <i className="material-icons prefix">email</i>
              <label for="icon_prefix">Email</label>
              <input ref={emailInput} id="email" type="email" className="validate" />

            </div>
            <div className={style.margin}>
              <i className="material-icons prefix">https</i>
              <label for="icon_telephone">Password</label>
              <input ref={passwordInput} id="password" type="password" className="validate" />
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Зарегистрироваться
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default Registration;
