import styled from "styled-components";

interface menuProps {
    openMenuMobile: boolean
}

export const Container = styled.header<menuProps>`
    background: #F9575A;
    height: 83px;
    width: 100%;
    color: white; 
    

    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 120px;
        margin-right: 10px;
    }


    section{
        position: absolute;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background: white;
        box-shadow: 0px 0px 8px 0.2px rgba(1, 1, 1, 0.2);
        width: 150px;
        height: 120px;
        transform: translate(5%, 12%);
        top: 69px;
        right: 12px;
        visibility: ${props => props.openMenuMobile ? "visible" : "hidden"};

        button{
            width: 70%;
            margin: auto;
            color: #F9575A;
            background: white;
        }

        button:hover{
            background: none;
        }

        button:nth-child(1){
            
        }
    }

    .LogoMenuDrop{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .Search{
        margin-right: 20px;
    }
    
    .Search-Desktop{
        display: none;
    }


    @media(min-width: 768px){
        .Down{
            display: none;
        }

        img{
            width: 137px;
            margin-right: 10px;
        }
        section{
            display: none;
        }

        .Search{
            display: none;
        }

        .Search-Desktop{
            display: initial;
        }

        .Barra{
            display: initial;
        }
    }


`


export const Icons = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    
    svg:nth-child(1){
        margin-left: 20px;
    }

    svg:nth-child(2){
        margin-left: 10px;
    }

    span{
        display: none;
        
    }

    @media(min-width: 768px){
        span{
            display: initial;
        }
       
    }

    .hamburguer{
        display: flex;
        justify-content: center;
        align-items: center;

        span{
            margin-left: 20px;
            font-size: 24px;
        }
    }

    .Barra{
        width: 1px;
        height: 50px;
        background: white;
        margin: 0 10px;
        display: none;
    }

    @media(min-width: 768px){
        .Barra{
            display: initial;
            margin-left: 20px;
            margin-right: 20px;
        }

        svg:nth-child(1){
            margin-left: 0;
        }

        svg.Search-Desktop{
            margin-left: 20px;
        }

        
    }

`


export const Desktop = styled.div`
    display: none;

    @media(min-width: 768px){
       display: flex;
        button:nth-child(1){
            color: white;
            background: none;
            font-weight: bold;
        }

        .Enter{
            color: #F9575A;
            font-weight: bold;
            background: white;
            margin-right: 20px;
            margin-left: 28px;
        }
       
    }
`