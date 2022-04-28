import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUserAC } from '../../redux/actionCreators/usersAC';

function Logout() {
  const dispatch = useDispatch()
  const navigation = useNavigate()

  useEffect(() => {
    dispatch(logoutUserAC())
    navigation('/')
  })
  return (
    <div>

    </div>
  );
}

export default Logout;
