import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import CardList from "../CardList/CardList";
import Cart from "../Cart/Cart";
import Login from "../Login/Login";
import Nav from "../Nav/Nav";
import {toyAT} from '../../redux/actionTypes/toyAT'

import './App.css';
import DetailCard from "../DetailedCard/DetailCard";
import Registration from "../Registration/Registration";
import Logout from "../Logout/Logout";


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
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Logout/>}/>
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
