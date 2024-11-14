import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";



function  AdminLogin (){
    const navigate=useNavigate();
const {user,setUser}=useContext(UserContext);

    function getdata(event){
event.preventDefault();
const data=new FormData(event.target);
const senddata={
    userid:data.get("userid"),  
    password:data.get("password")   
}
console.log(senddata);      
// Create code for  calling API and API will return userId, useraddress
//login successful  
const result=true
setUser(result)
navigate("/Admin")
}
    return(
    <>
    <form onSubmit={getdata}>
    <input type="text" name="userid"/>
    <input type="password" name="password"/>
    <button type="submit">Login</button>
</form>
    </>
    
    )
    }
    
    export default AdminLogin;