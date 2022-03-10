type PersonLists={
    names:{
        first:string,
        last:string,
    }[]
};
export const ObjectsLists=(props:PersonLists)=>{
    return(
        <div>
            {props.names.map(name=>{
                return (
                    <h2 key={name.first}>{name.first} {name.last} </h2>
                )
            })
        }
        </div>
    )
}
export default ObjectsLists;