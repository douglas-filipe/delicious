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
        cursor: pointer;
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
        cursor: pointer;

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

export const MenuContainer = styled.div`
    width: 100%;
    height: 420px;
    position: absolute;
    transform: translateY(15%);
    top: 20px;
    background: rgb(188,64,67);
    background: linear-gradient(0deg, rgba(188,64,67,0) 0%, rgba(243,85,88,1) 2%, rgba(243,85,88,1) 84%, rgba(188,64,67,1) 100%);

    .menuListCategories{
        margin-top: 20px;
        width: 100%;
        height: 200px;
        display: flex;
        gap: 50px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .menuListCategories .category{
        color: #FECCBC;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 24px;
        font-weight: bold;
    }

    .menuListCategories .category:hover{
        color: white;
    }

    .category svg{
        width: 24px;
        height: 24px;
        margin-bottom: 3px;
    }

    .category h3{
        margin: 0;
        padding: 0;
    }

`

export const Mobile = styled.div`
    display: flex;
    justify-content: space-between;
    button{
        margin: 20px;
        font-weight: bold;
    }

    .Enter{
        background: white;
        color: #F9575A;
    }
`