import {motion} from "framer-motion";
import styled from "styled-components";
import { renderGradient } from "./utils";


export const Wrapper = styled.div`
    width: max-contend;
    displey: flex;
    justify-content: center; 
    align-items: center;
    margin-bottom: 1rem; 
`;

export const Container = styled.div`
    width: 100%;
    height: max-contend;
    display: grid;
    place-items: center;
    cursor: pointer;
    perspective: 2000;
`;

export const CardWrapper = styled(motion.div)`
    width: 50rem;
    height: 70rem;
    display: grid;
    place-items: center;
    overflow: hidden;

    @media (max-width: 850px) {
        width: 45rem;
        height: 65rem;
      }

    @media (max-width: 575px) {
        width: 30rem;
        height: 60rem;
      }

      .categorie_title{
        color: #fff;
      }
`;

export const Card = styled.div`
    width: 30rem;
    height: 55rem;
    background: #eee;
    border-radius: 2.5rem;
    box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.7);
    position: relative;

    @media (max-width: 850px) {
        width: 25rem;
        height: 50rem;
      }

    @media (max-width: 575px) {
        width: 20rem;
        height: 43rem;
      }
`;

export const CTop = styled.div`
    width: 100%;
    height: 50%;
    padding: 3rem;
    border-radius: 2.5rem 2.5rem 0 0;
    transition: background 0.5s;
    background-image: linear-gradient(${({currentColor})=> renderGradient(currentColor)});
`;

export const Logo = styled.img`
    width: 8rem;
    height: 5rem;
    margin-bottom: 2rem;

    @media (max-width: 850px) {
        width: 7rem;
        height: 4rem;
      }

      @media (max-width: 575px) {
        width: 6rem;
        height: 4rem;
      }
`
export const CTopText = styled.div`
    color: #fff;
`;

export const CTopTitle = styled.h1`
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .1rem;
    margin-bottom: 1rem;

    @media (max-width: 575px) {
        font-size: 1.6rem;
      }
`;

export const Description = styled.p`
    font-weight: 400;
    letter-spacing: .1rem;
`;

export const Shoes = styled(motion.div)`
    height: 10%;
    user-select: none;

    img{
        user-select: none;
    }
`;

export const ShoeOne = styled(motion.img)`
    width: 25rem;
    position: absolute;
    top: -10rem;
    right: -9rem;
    transform: rotate(45deg);
    transition: transform 1s;

    @media (max-width: 850px) {
        width: 20rem;
        top: -8rem;
        right: -6rem;
      }

      @media (max-width: 575px) {
        width: 15rem;
        top: -6rem;
        right: -4rem;
      }
`;

export const ShoeTwo = styled(motion.img)`
    width: 20rem;
    position: absolute;
    top: -5rem;
    right: -47rem;
    transition: transform 1s;

    @media (max-width: 850px) {
        width: 15rem;
        top: -3rem;
        right: -46rem;
      }

      @media (max-width: 575px) {
        width: 12rem;
        top: -2rem;
        right: -44rem;
      }
`;

export const CBottom = styled.div`
    width: 100%;
    height: 50%;
    padding: 2rem 3rem;
`;

export const CBottomTitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.6rem;

      
`;

export const CBottomTitle = styled.h1`
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: .1rem;
    color: #333;

    @media (max-width: 575px) {
        font-size: 1.5rem;
      }
`;

export const CBottomLogo = styled.img`
    width: 8rem;
    height: 5rem;
    padding: .2rem;

    @media (max-width: 850px) {
        width: 7rem;
      }

      @media (max-width: 575px) {
        width: 6rem;
      }
`;

export const Title = styled.h3`
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 1.5rem;

      @media (max-width: 575px) {
        font-size: .9rem;
        margin-bottom: 1rem;
      }
`;

export const BrandTitle = styled.h3`
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: .1rem;
    margin-bottom: 1rem;

    @media (max-width: 575px) {
        font-size: 1rem;
      }
`;

export const Brands = styled.div`
    display: flex;

    .brand-1, .brand-2{
        padding: 7px 20px;
        border-radius: 1rem;
        cursor: pointer;
        font-weight: bold;
        letter-spacing: .1rem;
        text-transform: uppercase;
        box-shadow: 0 1px 5px black;

          @media (max-width: 575px) {
            padding: 5px 15px;
          }
    }

    .brand-1{
        background: #a8e063;
        margin-right: 1.5rem;
        color: #fff;
        
        @media (max-width: 575px) {
            margin-right: 1rem;
          }
    }

    .brand-1:hover{
        box-shadow: 0 1px 10px black;
    }

    .brand-2{
        background: #1c477a;
        color: #fff;
    }

    .brand-2:hover{
        box-shadow: 0 1px 10px black;
    }

`;

export const Price = styled.div`
    width: 16rem;
    height: 4rem;
    background-color: ${({currentColor}) => currentColor === 1 ? "#a8e063" : "#1c477a"};
    color: #fff;
    border-radius: 0.5rem;
    position: absolute;
    right: -1rem;
    bottom: 3rem;
    box-shadow: 0 1rem 2rem rgba(28, 71, 122, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.5s;

    @media (max-width: 575px) {
        width: 14rem;
        height: 3rem;
        bottom: 2rem;
      }

    span{
        font-size: 2rem;
        font-weight: bold;
        text-transform: uppercase;

        @media (max-width: 575px) {
            font-size: 1.5rem;
          }
    }
`










    