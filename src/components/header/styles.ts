import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 60px;
    background: #5C0819;

    svg{
        color: white;
        width: 20px;
        height: 20px;
    }


`


export const BrowseCategory = styled.div`
    display: flex;
    align-items: center;
    
    .Search{
        padding: 0 0 0 5px;
        border-left: 1px solid white;
    }

`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    color: white;
    padding: 0 5px 0 10px;
    h2{
        display: none;
    }

`

export const Logo = styled.div`
    img{
        width: 80px;
    }
`

export const SessionUser = styled.div`
    svg{
        padding: 0 10px 0 15px;
    }

`