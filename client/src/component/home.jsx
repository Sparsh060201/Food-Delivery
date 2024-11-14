import { useContext } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
export default Home;
function  Home (){
    const navigate=useNavigate();
    const{user,setUser}=useContext(UserContext);
function finalorder(event){
    event.preventDefault();
const data=new FormData(event.target);
const senddata={
 userid:user.userid,
cheeseandcorn:data.get("cheeseandcorn"),
capsicum:data.get("capsicum"),
margherita:data.get("margherita"),
onion:data.get("onion"),
address:user.address,   
totalamount:data.get("cheeseandcorn")*110+data.get("capsicum")*90+data.get("onion")*105+data.get("margherita")*130,
}
setUser(senddata) 
navigate("/Mycart")
}
if(user){

    return(
    <><h1>welcome,{user.userid}</h1>
    <h2>your order will be delivered to,{user.address} </h2>
    <h3>OrderId:{user.orderid}</h3>
    <form onSubmit={finalorder}>
     <input type="number" name="cheeseandcorn" min="0" defaultValue={0}/>
     <input type="number" name="capsicum" min="0"defaultValue={0}/>
     <input type="number" name="margherita" min="0"defaultValue={0}/>
     <input type="number" name="onion" min="0"defaultValue={0}/>
     <button type="submit">Add Pizza</button>
    </form>
    </>
    
    )
    }
    else{
        return(<><h1>You are not logged in</h1></>)

    }
   }