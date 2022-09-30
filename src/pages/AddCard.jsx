import DemoCard from "../components/DemoCard";
import { useDispatch, useSelector } from "react-redux"
import { update } from "../Redux/demoCardSlice";
import { addCard } from "../Redux/cardListSlice";
import { useNavigate } from "react-router-dom";

const AddCard = () => {

  const dispatch = useDispatch();
  const redirect = useNavigate();

  const { cardNumber, cardHolderName, validThru, ccv, vendor  } = useSelector((store) => store.demoCard.demoCard)

  const { demoCard  } = useSelector((store) => store.demoCard)

  const { user } = useSelector((store) => store.user)

  const handleClick = () => {
    let domCardNumber = document.getElementById("cardNumber")
    let domHolderName = document.getElementById("cardHolderName")
    let domValidThru = document.getElementById("cvalidThru")
    let monthAge = domValidThru.value.split("-"); 
    let domCcv = document.getElementById("ccv")
    let domVendor = document.getElementById("domVendor")
  
      if(domCardNumber.value.length <= 16 && domCcv.value.length <= 3){
        dispatch(update(
          [domCardNumber.value, 
          domHolderName.value,
          monthAge,
          domCcv.value,
          domVendor.value]))
      }
      else{}
  }

  const sendCard = (e) => {
    e.preventDefault();
    let validationMessage = document.getElementById("validation")
    let domCcv = document.getElementById("ccv")

    if(cardNumber.length != 16){
      console.log("at least 16 digits")
      validationMessage.innerText = "Cardnumber is invalid!"
    }
    else if(validThru == "mm/yy"){
      console.log("please add a date!")
      validationMessage.innerText = "Please add a date!"
    }
    else if(ccv == ""){
      console.log("please add ccv!")
      console.log("ccv is:" + ccv)
      validationMessage.innerText = "Please provide the ccv!"
    }
    else{
    dispatch(addCard({
      cardNumber,
      cardHolderName, 
      validThru, 
      ccv, 
      vendor
      }
    ))
    redirect("/cards");
    }
  }

  return ( 
    <>
    <main>
      <h2>Add a new bank card</h2>
      <div className="preview">
        <h3>New card</h3>
        <DemoCard />
      </div>

      <form className="card-form" noValidate>
        <section className="form-field">
          <label htmlFor="cardNumber">Card number</label>
          <input type="text" 
                 id="cardNumber"
                 onChange={handleClick}
                 placeholder="Card number"
                 maxLength={16}
                 />
        </section>
        { user ?
        <section className="form-field">
          <label htmlFor="cardHolderName">Cardholder name</label>
          <input type="text" 
                 id="cardHolderName"
                 value={`${user.results[0].name.first} ${user.results[0].name.last}`}
                 disabled
                 />
        </section>
        : ""}

        <section className="form-field-row">

          <section className="field-row">
            <label htmlFor="validThru">Valid thru</label>
            <input type="date" 
                   id="cvalidThru"
                   onChange={handleClick}
                  />
                   
          </section>

          <section className="field-row">
            <label htmlFor="ccv">CCV</label>
            <input type="text" 
                   id="ccv"
                   onChange={handleClick}
                   placeholder="123"
                   maxLength={3}/>                  
          </section>
        </section>
        <section className="form-field">
            <label htmlFor="vendor">Vendor</label>
                   <select name="domVendor" 
                           id="domVendor"
                           onChange={handleClick}>
                      <option value="MASTERCARD">Mastercard</option>
                      <option value="VISA">Visa</option>
                      <option value="AMERICAN-EXPRESS">American express</option>
                   </select>                
        </section>
        <div className="validation" id="validation"></div>
        <button className="button-addcard" onClick={sendCard}>
          Add Card
        </button>
      </form>
    </main>
    </>
   );
}
 
export default AddCard;