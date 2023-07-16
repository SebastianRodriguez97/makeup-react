import { styled, keyframes } from 'styled-components'

export const GridCards = styled.div`
    margin: 0 auto;
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    div.card {
        text-transform: capitalize;
        cursor: pointer;
        border: none;
        transition: 0.5s ease;
        max-width: 200px;
    }
    div.card:hover{
        box-shadow: 0px 0px 20px #b4b4b4;
        transform: scale(1.02);
    }
    div.card img {
        height: 200px;
    }

    @media (max-width: 500px) { 
            display: flex!important;
            flex-direction: column;
            align-items: center;
        }
`;

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
    div.spinner-border{
        width: 10rem; 
        height: 10rem;
        border-width: .8em;
    }
`;

const PlaceholderGlowAnimation = keyframes`
    50% {
            opacity: .2;
        }
`;

export const PlaceholderGlow = styled.div`
    animation: ${PlaceholderGlowAnimation} 2s ease-in-out infinite;
    display: inline-block;
    min-height: 1em;
    vertical-align: middle;
    cursor: wait;
    opacity: .5;
`;

export const GridColors = styled.div`
    margin: 10px auto;
    display: grid;
    gap: .5rem;
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    div {
        width: 20px;
        height: 20px;
        border-radius: 50%;        
        transition: 0.5s ease;
        box-shadow: 0px 0px 5px #b4b4b4;
    }
    div:hover{
        box-shadow: 0px 0px 20px #b4b4b4;
        transform: scale(2.5);
    }
`;

export const ModalInfo = styled.div`
    div {
        margin-bottom: 10px;
    }
`;

export const PriceLabel = styled.div`
    font-variant-numeric: oldstyle-nums;
`;

export const LoginBackground = styled.div`
    background-image: url("https://wallpaperaccess.com/full/1190372.jpg");
    background-size: cover;
    height: calc(100vh - 63.5px);
`;

export const LoginForm = styled.div`
    div.card {
        background: white;
        width: 30%;
        min-width: 300px;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
        box-shadow: 0px 0px 20px #b4b4b4;
        border: none;

         label{
            font-weight: bolder;
        }
        input {
            border-color: #b4b4b4;
        }

        @media (max-height: 500px) { 
            top: 220px;
        }
    }
`;