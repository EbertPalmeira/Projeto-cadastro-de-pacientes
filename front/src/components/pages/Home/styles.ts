import styled from "styled-components";

export const Container = styled.div`
    background-color: #02044A;
    color: #FFF;
    min-height: 100vh;
    margin:0;
`;
export const Text = styled.div`
    text-aling:center;
    display:grid;
    justify-content:center;
`;
export const Div = styled.div`
    display:grid;
    grid-template-columns:repeat(2,200px);
    justify-content:center;
    border:2px solid red;
    justify-content: center;
    gap:100px;

    img{
        width:250px;
    }
`;

