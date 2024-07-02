import * as C from "./styles";

type Props={
    title:string,
    value:string
    onClick: ()=> void;
}
export const SelectOption=({title ,value,onClick,}:Props)=>{
return(
    <C.Container onClick={onClick}>
        <C.Info >
            <C.Title value={value} >{title}</C.Title>
        </C.Info>
    </C.Container>
)
}