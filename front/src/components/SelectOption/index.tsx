import * as C from "./styles";

type Props={
    title:string,
 
    
}
export const SelectOption=({title}:Props)=>{
return(
    <C.Container>
        <C.Info>
            <C.Title>{title}</C.Title>
        </C.Info>
    </C.Container>
)
}