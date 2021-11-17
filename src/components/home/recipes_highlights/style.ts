import { Image } from "@chakra-ui/react";
import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;

  display: none;

  @media (min-width: 768px) {
    height: 60vh;
    width: 90vw;
    display: grid;
    /* rows /columns */

    grid-template: 3fr 3fr / 3fr 3fr 3fr;
    gap: 30px;
    grid-template-areas:
      "MainImg MainImg SecImg"
      "MainImg MainImg TirImg"
      "Division Division Division";
    img {
      transition: transform 0.5s ease;
      box-sizing: border-box;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    img:hover {
      transform: scale(1.2);
    }
  }
`;

export const Images = styled(Image)`
  background-color: green;
`;

export const MainImg = styled.div`
  @media (min-width: 768px) {
    grid-area: MainImg;
    overflow: hidden;
  }
`;

export const SecImg = styled.div`
  grid-area: SecImg;
  overflow: hidden;
  font-size: 0.8rem;
  display: flex;
`;

export const TirImg = styled.div`
  grid-area: TirImg;
  overflow: hidden;
  font-size: 0.8rem;
  display: flex;
  align-items: flex-end;
`;

export const Division = styled.div`
  grid-area: Division;
  height: 10px;

  margin-top: 40px;
  background-color: #f9575a;
`;
