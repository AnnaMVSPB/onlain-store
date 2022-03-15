import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CardList from "../CardList/CardList";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Nav from "../Nav/Nav";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/categori/:id" element={<CardList/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
