import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setActive } from "../Redux/cardListSlice";

const Card = (props) => {

  const { data, user } = props;
  let { id, cardNumber, cardHolderName, validThru, ccv, vendor, isActive } = data;
  let userName;

  // let formatCardNumber = () => {
    let stringedCardNumber = cardNumber.toString();
    for( let i = 0; i < stringedCardNumber.length; i++){
        console.log(stringedCardNumber[i])
    }
  // }



  const dispatch = useDispatch();

  if(user!= null){
    user.results.forEach((user) => {
      userName = `${user.name.first}  ${user.name.last}`
    })
  }

  let handleVendor = () => {
    switch(vendor){
      case "VISA":
         return `visa`
      case "MASTERCARD":
         return `mastercard`
      case "AMERICAN-EXPRESS":
         return `american-express`
     }
  }

  return ( 
    <div className={`${handleVendor()} card`}
    onClick={() => dispatch(setActive(id))}>
      <section className="card-head">
       <div className="scan"></div>
        <div className="vendorPic"></div>
      </section>
      <section className="card-main">
        <p>{cardNumber}</p>
      </section>
      <section className="card-footer">

        { userName ? (
        <section className="footer-left">
          <p>Cardholder name</p>  
          <span><p>{userName.toUpperCase()}</p></span>    
        </section>
        ) : ""
        }

        <section className="footer-right">
          <p>Valid thru</p>
          <span><p>{validThru}</p></span>
        </section>
      </section>
      
    </div>
   );
}
 
export default Card;