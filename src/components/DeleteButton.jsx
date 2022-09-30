import { useDispatch, useSelector } from "react-redux"
import { removeCard } from "../Redux/cardListSlice";

const DeleteButton = (props) => {

const dispatch = useDispatch();

  const { data, index } = props;
  const { id } = data;


  return (  
    <button className="remove-button" onClick={() => (dispatch(removeCard([id, index])))}>
      x  Remove Card 
    </button>
  );
}
 
export default DeleteButton;