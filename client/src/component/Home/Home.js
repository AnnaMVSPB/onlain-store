import React from 'react';
import { useState } from 'react';

function Home() {
  const [state,setState]= useState(null)
console.log(state)

  function add (e){
    e.preventDefault();
   
    // const body ={
    //   name:e.target.title.value,
    //   price:e.target.price.value,
    //   type:e.target.select.value,
    //   info:'rrr',
    //   img:e.target.img.files[0]
    // }

    // fetch('http://localhost:7000/api/toy',{
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(body)
    // })
    // .then(res => res.json())
    // .then (data => console.log(data))
  }
  return (
    <div>
      <form onSubmit={add}>
        <input type="text" name="title"/>
        <input type = 'number' name = 'price'/>
        <input type='file'name='img' multiple onChange={add}/>
        <select name='select'>
          <option value="Мягкие игрушки">мягкие</option>
          <option value="Машинки">машина</option>
          <option value="Куклы">кукла</option>
        </select>
        <button type="submit">lk</button>
      </form>
      <img src={state}/>
    </div>
  );
}

export default Home;
