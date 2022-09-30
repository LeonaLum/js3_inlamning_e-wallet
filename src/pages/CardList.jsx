
import Card from "../components/Card";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import DeleteButton from "../components/DeleteButton";

const CardList = () => {


  const { cards, activeCard } = useSelector((store) => store.cardList);
  const { user } = useSelector((store) => store.user)
  const redirect = useNavigate();



  return ( 
    <>
    <ul className="card-list">
      <div className="active-card">
        <p>Active card</p>

        {activeCard.map((card, i) => {
            return <><Card data={card} user={user} key={i}/></>
          })
        }

      </div>
        {cards.map((card, i) => {
         if(card.isActive != true){
          return <><Card data={card} user={user} key={i}/><DeleteButton data={card} index={i} /></>
        }
      })}
       <button className="button-addcard"
               onClick={() => redirect("/addcard")}>
       Add a new card
       </button>
    </ul>
    </>
   );
}
 
export default CardList;