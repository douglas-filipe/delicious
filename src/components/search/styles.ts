import styled from "styled-components";
import { openProps } from "../../types/open";

export const Container = styled.div<openProps>`

    width: 200px;
    height: 25px;
    display: flex;
    position: absolute;
    margin: auto;
    border: 1px solid black;
    transform: translate(50%, 5%);
    top: 8%;
    right: 50%;
    border-radius: 20px;
    align-items: center;
    justify-content: space-between;
    background: white;
    z-index: 2;
    visibility: ${props => props.open ? 'visible' : 'hidden'};

    input{
        border: none;
        outline: none;
        background: none;
        padding-left: 10px;
        width: 150px;
    }

    svg{
        color: black;
        width: 20px;
        height: 20px;
    }

`