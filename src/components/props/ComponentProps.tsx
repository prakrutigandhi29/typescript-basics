import { Login } from "./LoginComponent"
import {PrivateProps} from "./PrivateComponent"
type Proptypes={
    isLoggedIn:boolean,
    component:React.ComponentType<PrivateProps>
}
export const ComponentProp =({isLoggedIn,component:Component}:Proptypes)=>{
    
        if(isLoggedIn){
            return <Component name="file.txt"/>
        }
        else
            return <Login/>
}
    
