import React from 'react';
import { Button,Card } from 'react-bootstrap';
import style from './Card.module.css';

function CardToy({toy}) {
  const path = `http://localhost:7000/${toy.img}`


  return (

<Card className={style.card}>
  <Card.Img variant="top" src={path}  className={style.img}/>
  <Card.Body className={style.body}>
    <Card.Title>{toy.name}</Card.Title>
   <Card.Title>{`${toy.price} р`}</Card.Title>
    <Button variant="primary">В корзину</Button>
  </Card.Body>
</Card>
     
  );
}

export default CardToy;
