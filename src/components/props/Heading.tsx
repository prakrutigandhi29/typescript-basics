type TextProps={
    children:string;
}
export const heading=(props:TextProps)=>{
    return(
        <div>
            <h2>{props.children}</h2>
        </div>
    )
}
export default heading;