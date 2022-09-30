import "./styles.css"
import { Routes, Route, NavLink } from "react-router-dom";
import CardList from "./pages/CardList";
import AddCard from "./pages/AddCard";
import Home from "../src/pages/Home";
import { getUser } from "./Redux/userSlice";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
    <div className="App">
     
      <NavLink to="/"><h1>E-WALLET</h1></NavLink>
      <main>
       <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/cards" element={<CardList />}/>
         <Route path="/addcard" element={<AddCard/>}/>
       </Routes>
      </main>
      
    </div>
     
    </>
  );
 
}

export default App;
