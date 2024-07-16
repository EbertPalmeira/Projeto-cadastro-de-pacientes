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
    justify-content: center;
    gap:300px;
     padding: 10px;
     margin-top:30px;

    img{
        width:300px;
    }
        button{
        background-color:#25cd89;
        color:#fff;
        cursor:pointer;
        font-size:14px;
        font-weight:bold;
        padding:20px 40px;
        border:0px;
        border-radius:30px;
        margin-top:30px;
        transition:0.5s;
    }
        button:hover{
                background-color:#2F4F4F;

        }
`;

