import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import CardList from "../CardList/CardList";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Nav from "../Nav/Nav";
import {toyAT} from '../../redux/actionTypes/toyAT'

import './App.css';
import DetailCard from "../DetailedCard/DetailCard";

function App() {
  const dispath = useDispatch()
  useEffect(()=>{
dispath({type:toyAT.INIT_TOY_SAGA})
  },[dispath])
  return (
    <div >
      <BrowserRouter>
      <Nav/>
      <div className="App">
      <Routes>
        
      <Route path="/" element={<CardList/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/categori/:id" element={<CardList/>}/>
      <Route path="/detailCard/:id" element={<DetailCard/>}/>
     
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
