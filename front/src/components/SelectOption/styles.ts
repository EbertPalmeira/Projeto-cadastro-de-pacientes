import styled from "styled-components";
export const Container = styled.div<{selected:boolean;}>`
    display:flex;
    border:2px solid ${props=>props.selected? '#25cd89':'#16195c'};
    border-radius:10px;
    padding:15px;
    margin-bottom:15px;
    justify-content:center ;
    cursor:pointer;

    &:hover{
        border:2px solid #496459;
    }


`;
export const Info =styled.div`
    flex:1;


`;

export const Title =styled.div`
    font-size:17px;
    font-weight:bold;
    margin-bottom:7px;

`;

export const Description =styled.div`
    font-size:14px;
    color?#88B8d4;

`;