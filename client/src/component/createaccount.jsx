function  CreateAccount (){
    function register(event){
        event.preventDefault();
const data=new FormData(event.target);
const senddata={
userid:data.get("userid"),
password: data.get("password")
address:data.get("address")
}
    }
    return(
    <><h1>This is a create account Page</h1>
    <form onSubmit={register}>
<input type="text" name="userid"/>
<input type="password" name="password"/>
<input type="text" name="address"/>
<button type="submit">Register</button>
</form>
    </>
    
    )
    }
    
    export default CreateAccount;