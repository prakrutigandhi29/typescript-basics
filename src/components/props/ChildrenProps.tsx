type HeadingProps={
    children:React.ReactNode
}
export const childrenprops=(props:HeadingProps)=>{
    return(
        <div>{props.children}</div>
    )
}
export default childrenprops;