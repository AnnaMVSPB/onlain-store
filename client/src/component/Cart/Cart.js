import React from 'react';
import { useSelector } from 'react-redux';
import CardCart from './CardCart';

function Cart() {
  const { cart } = useSelector(state => state.toyReducer)
  return (
    <div>
      <div>
        {cart.length > 0 ? cart.map(toy => <CardCart key={toy.id} toy={toy} />)
          : <p>нету</p>
        }
      </div>
    </div>
  );
}

export default Cart;
