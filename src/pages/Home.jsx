import { NavLink } from "react-router-dom";

const Home = () => {
  return ( 
     <div className="button-container">
      <NavLink to="/cards" className="button-addcard">
        Your Cards
      </NavLink>
      <NavLink to="/addcard" className="button-addcard">
        Add a new Card
      </NavLink>
     </div>
   );
}
 
export default Home;