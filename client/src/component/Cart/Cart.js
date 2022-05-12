import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardCart from './CardCart';

function Cart() {
  const { cart } = useSelector(state => state.toyReducer)
  return (
    <div>
      <div>
        {cart.length > 0 ? cart.map(toy => <CardCart key={toy.id} toy={toy} />)
          : <><p>Пока Ваша корзина пуста,</p><Link to="/">Вы можете вернуться к выбору товаров</Link></>
        }
      </div>
    </div>
  );
}

export default Cart;
