import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

function  Mycart (){
    const {user,setUser}=useContext(UserContext);
    const navigate=useNavigate();

    function placeorder(){
       
        //here is the code of api where user will send data to be stored in database and will recieve
        //orderid .
        const result={userid:user.userid,address:user.address,orderid:"1234abcd"}
        setUser(result)
        navigate("/Home")
    }
    return(
    <>
    <table>
<tbody>
<tr><td>UserID</td><td>{user.userid}</td></tr>
<tr><td>Cheese and Corn</td><td>{user.cheeseandcorn}</td></tr>
<tr><td>Capsicum</td><td>{user.capsicum}</td></tr>
<tr><td>Margherita</td><td>{user.margherita}</td></tr>
<tr><td>Onion</td><td>{user.onion}</td></tr>
<tr><td>Address</td><td>{user.address}</td></tr>
<tr><td>Total Amount</td>{user.totalamount}</tr>
</tbody>
    </table>
<button onClick={placeorder}>Place Order</button>
    </>
    )
    }
    
    export default Mycart;