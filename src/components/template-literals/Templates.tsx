type HorizontalProps='left'| 'center'| 'right'
type VerticalProps='top'|'bottom'|'center'
type PositionProps={
               position:  |Exclude<`${HorizontalProps}-${VerticalProps}`,`center-center`>
                 | `center`
}
export const Templates=({position}:PositionProps)=>{
    return(
        <>
        <h2>{position}</h2>
        </>
    )
}