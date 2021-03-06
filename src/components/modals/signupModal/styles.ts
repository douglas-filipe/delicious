import styled from "styled-components";

interface modalProps{
    openSignupModal: boolean
}

export const Container = styled.div<modalProps>`
    width: 100vw;
    height: 100vh;
    background: rgba(1, 1, 1, 0.6);
    position: fixed;
    inset: 0 0 0 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;
    visibility: ${props => props.openSignupModal ? "visible" : "hidden"};
    transition: 300ms;
    opacity: ${props => props.openSignupModal ? "1" : "0"};


    form{
        width: 280px;
        background: white;
        margin-top: 70px;
        margin-bottom: 30px;
        inset: 0 0 0 0;
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        padding: 12px 20px;
        color: #444444;
        animation: ${props => props.openSignupModal ? "animationSignup 400ms": "none"};
        transform: ${props => props.openSignupModal ? "scale(100%)": "scale(50%)"};
        transition: 300ms;

    }

    @keyframes animationSignup{
        0%{
            transform: scale(60%);
        }

        70%{

            transform: scale(110%);

        }
    }
    
    ::-webkit-scrollbar {
        display: none;
    }
    h1{
        font-size: 20px;
        text-align: center;
        margin-bottom: 10px;
        color: #444444;
        font-weight: bold;
    }
    label{
        margin-bottom: 6px;
        color: #444444;
    }

    .Submit{
        background-color: #FE9A04;
        color: white;
        width: 152px;
        height: 40px;
        border-radius: 20px;
        font-weight: bold;
        margin: 17px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 33px;
    }

    .Submit:hover{
        background-color: #FE9A04;
    }

    .Close{
        position: relative;
        background-color: #FF96A1;
        color: white;
        border-radius: 50px;
        left: 90%;
    }

    .Close:hover{
        background-color: #F9575A;
    }

    input{
        margin-bottom: 16px;
    }

    p{
        font-size: 14px;
        color: #444444;
        text-align: center;
        margin-bottom: 10px;
        font-weight: bold;
    }

    p a{
        color: #F9575A;
        cursor: pointer;
    }

    span{
        color: red;
    }

    .loginModal{
        color: #F9575A;
        font-weight: bold;
        text-align: center;
        font-size: 14px;
        cursor: pointer;
    }

    @media(min-width: 768px){
        form{
            width: 356px;
        }

        h1{
            font-size: 28px;
        }

        .Close{
            width: 40px;
            height: 40px;
        }
    }
`

export const Closed = styled.div`


`

//visibility: ${props => props.open ? 'visible': 'hidden'};
