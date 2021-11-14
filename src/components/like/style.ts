import styled from "styled-components";

interface likeProps{
    visible: boolean
}

export const Container = styled.div<likeProps>`
    margin: 0;
    padding: 0;
    border: 1px solid red;
`