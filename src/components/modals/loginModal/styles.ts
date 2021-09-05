import styled from "styled-components";
import { openProps } from "../../../types/open";

export const Container = styled.div<openProps>`
    width: 100vw;
    height: 100vh;
    background: rgba(1, 1, 1, 0.6);
    position: fixed;
    inset: 0 0 0 0;
    z-index: 99;
    visibility: ${props => props.open ? 'visible': 'hidden'};

    form{
        width: 250px;
        height: 300px;
        background: white;
        margin: 20px auto;
        inset: 0 0 0 0;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        padding: 20px;
    }
`

export const Closed = styled.div`


`