import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addCartSagasAC } from '../../redux/actionCreators/cartAC';
import CardCart from './CardCart';
import style from './CardCart.module.css'

function Cart() {
  const { cart, totalCost, total } = useSelector(state => state.cartReducer)
  const { user } = useSelector(state => state.userReducer)
  const navigation = useNavigate()
  const dispatch = useDispatch()

  const checkout = () => {
    if (Object.keys(user).length) {
      const data = { cart, totalCost, user }
      dispatch(addCartSagasAC(data))
     
    } else {
      navigation('/login')
    }
  }
  return (
    <div className={style.cart}>
      <div>
        {cart.length > 0 ? cart.map(toy => <CardCart key={toy.id} toy={toy} />)
          : <><p>Пока Ваша корзина пуста,</p><Link to="/">Вы можете вернуться к выбору товаров</Link></>
        }
      </div>
      {cart.length > 0 && <div>
        <div><p>Общее кол-во товаров:</p>{total[0]}</div>
        <div><p>Общая стоимость покупки составляет:</p>{totalCost[0]}</div>
        <button onClick={checkout} className="btn waves-effect waves-light" type="submit" name="action">Оформить заказ</button>
      </div>}

    </div>
  );
}

export default Cart;
