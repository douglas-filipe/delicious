import styled from "styled-components";

interface openMenuProps {
    openMenu: boolean
}

export const Container = styled.header`
    background: #F9575A;
    height: 83px;
    width: 100%;
    color: white;
    position: relative;
    z-index: 99;
    

    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 120px;
        margin-right: 10px;
        user-select: none;
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
        user-select: none;
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
            user-select: none;
        }
        -webkit-tap-highlight-color: transparent;
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

export const MenuContainer = styled.div<openMenuProps>`
    width: 100vw;
    height: 100vh;
    top: 0; bottom: 0; left: 0; right: 0;
    position: fixed;
    background: rgba(1, 1, 1, 0.7);
    visibility: ${props => props.openMenu ? "visible" : "hidden"};
    transition: 300ms;
    opacity: ${props => props.openMenu ? "1" : "0"};

    .BarraLateral{
        display: none;
    }
    
    .menuListCategories{
        width: 80vw;
        height: 100vh;
        background: #F9575A;
        animation: ${props => props.openMenu ? "animationMenu 300ms" : "none"};
        transition: 300ms;
        transform: ${props => props.openMenu ? "none" : "translateX(-70%)"};
    }

    @keyframes animationMenu{
        0%{
            transform: translateX(-70%);
        }
    }

    .menuListCategories .category{
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
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

    .categories{
        display: flex;
        width: 200px;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        align-items: center;
        margin: auto;
    }

    @media(min-width: 768px){
        position: absolute;
        background: none;
        width: 100vw;
        height: 83px;
        margin-top: 82px;

        .menuListCategories{
            width: 100vw;
            height: 83px;
            background: #F9575A;
            background: rgb(243,85,88);
            background: linear-gradient(0deg, rgba(243,85,88,1) 0%, rgba(243,85,88,1) 2%, rgba(255,107,110,1) 91%, rgba(188,64,67,1) 100%);
            animation: ${props => props.openMenu ? "animationMenuDesktop 300ms" : "none"};
            transition: 300ms;
            transform: ${props => props.openMenu ? "none" : "none"};
        }

        .categories{
            width: 100%;
            height: 83px;
            gap: 20px;
        }

        .BarraLateral{
            display: initial;
            width: 1px;
            height: 70%;
            background: black;
            opacity: 0.8;
        }

        .menuListCategories .category{
            color: #FECCBC;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 24px;
            font-weight: bold;
        }

        @keyframes animationMenuDesktop{
            0%{
                opacity: 0;
            }
        }
    }

    @media(min-width: 1024px){
        .categories{
            gap: 40px;
        }
    }

    @media(min-width: 1440px){
        .categories{
            gap: 80px;
        }
    }

    
`

export const Mobile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 95%;
    margin: auto;

    button{
        margin: 5px auto;
        font-weight: bold;
        width: 230px;
        font-size: 1.2rem;
    }

    button:nth-child(1){
        margin-top: 20px;
        font-weight: bold;
        font-size: 2rem;
    }

    .Enter{
        background: white;
        color: #F9575A;
        margin-bottom: 20px;
        width: 90px;
    }


    .closeMenu{
        width: 45px;
        height: 45px;
        position: relative;
        margin-top: 10px;
        cursor: pointer;
    }

    @media(min-width: 768px){
        button{
            display: none;
        }

        .closeMenu{
            display: none;
        }
    }

    

`