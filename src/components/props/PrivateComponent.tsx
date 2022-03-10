export type PrivateProps={
    name:String;
}
export const PrivateComponent=({name}:PrivateProps)=>{
    return(
        <>
        <h2>Private Document {name}</h2>
        </>
    )
}
