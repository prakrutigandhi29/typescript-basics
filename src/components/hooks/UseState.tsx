import { useState } from "react"
export const UseState=()=>{
    type AuthUser={
        name:String,
        email:String;
    }
    const[user,setUser]=useState<AuthUser|null>(null);

    const handleLoggedIn=()=>{
        setUser({
            name:'Prakruti',
            email:'abc@gmail.com'
        })
    }
    const handleLoggedOut=()=>{
        setUser(null);
    }
    return(
        <div>
            <button onClick={handleLoggedIn}>Login</button>
            <button onClick={handleLoggedOut}>Logout</button>
            <h2>Username:{user?.name}</h2>
            <h2>Email:{user?.email}</h2>
        </div>
    )
}
export default UseState;