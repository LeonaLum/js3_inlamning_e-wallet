import { useDispatch, useSelector } from "react-redux"


const DemoCard = () => {

  const { cardNumber, cardHolderName, validThru, ccv, vendor } = useSelector((store) => store.demoCard.demoCard);
  // const { user } = useSelector((store) => store.user)


  return ( 
    <div className={`${vendor.toLowerCase()} card`}>
      <section className="card-head">
        <div className="scan"></div>
        <div className="vendorPic"></div>
      </section>
      <section className="card-main">
        <p>{cardNumber}</p>
      </section>
      <section className="card-footer">
        <section className="footer-left">
          <p>Cardholder name</p>  
          <span><p>{cardHolderName}</p></span>   
        </section>
        <section className="footer-right">
          <p>Valid thru</p>
          <span><p>{validThru}</p></span>
        </section>
      </section>
      
    </div>
   );
}
 
export default DemoCard;