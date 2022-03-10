type GreetProps=
{
    name:String
}
const greet=(props:GreetProps)=>{
    return(
    <div>
        <h2>Hello {props.name}  </h2>
    </div>
    )
}
export default greet