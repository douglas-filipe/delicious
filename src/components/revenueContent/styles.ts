import styled from "styled-components";

export const Container = styled.div`
    width: 70vw;
    display: flex;
    flex-wrap: wrap;
    margin: 20px auto;

`

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    margin: 10px auto;
    box-shadow: 0 0 2px black;
    transition: 0.3s;
    width: 200px;
    

    img{
        width: 100%;
    }

    :hover{
        transform: translateY(-5px);
    }

`