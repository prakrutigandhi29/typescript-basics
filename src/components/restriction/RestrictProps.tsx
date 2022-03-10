type NumberType={
    value:number
}
type IsPositive=NumberType&{
    isPositive?:boolean
    isNegative?:never
}
type IsNegative=NumberType&{
    isNegative?:boolean
    isPositive?:never
}

type NumberStatus=IsPositive|IsNegative

export const RestrictProps=({value,isPositive,isNegative}:NumberStatus)=>{
    return(
        <>
            <h2>{value} is {isPositive && 'positive'} {isNegative && 'negative'}</h2>
        </>
    )
}
export default RestrictProps;