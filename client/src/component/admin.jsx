import { useContext, useEffect,useState } from "react";
import { UserContext } from "../App";

function  Admin (){
const {user,setUser}=useContext(UserContext);
const[data,setData]=useState([{ Column1:"No Data",Column2:"No Data" }])

function fetchData(){
    console.log("Fetching Data")
}


    useEffect(()=>{
        fetchData()
    },[]);
    
    if(user){

        return(
        <><h1>welcome,Shopkeeper</h1>      
<table>
<thead>
<tr>{Object.keys(data[0]).map(column=><th key={Math.random()}>{column}</th>)}</tr>
</thead>
<tbody>
{data.map(obj=>{
return <tr key={Math.random()}>{
Object.values(obj).map(value=>{return <td key={Math.random()}>{value}</td>})
}</tr>
})}
</tbody>
</table>
        </>
        )
        }
        else{
            return(<><h1>You are not logged in</h1></>)
    
        }
    }
    
    export default Admin;   